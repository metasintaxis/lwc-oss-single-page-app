import lwc from '@lwc/rollup-plugin';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDevEnvironment = process.env.NODE_ENV !== 'production';
const node_environment = isDevEnvironment?'development':'production';
const applicationDirectory = isDevEnvironment?'dev':'dist'; 

const lwcInputDirectory = path.resolve(__dirname, 'src/client/lwc/');
const lwcInputFilePath = path.join(lwcInputDirectory, 'main.js');
const clientDirectory = path.resolve(__dirname, applicationDirectory, 'app');
const lwcOutputDirectory = path.resolve(clientDirectory);
const lwcOutputFilePath = {
	file: path.join(lwcOutputDirectory, 'app.js'),
	format: 'esm'
};

const serverInputDirectory = path.resolve(__dirname, 'src/server/');
const serverInputFilePath = path.join(serverInputDirectory, 'server.js');
const serverOutputDirectory = path.resolve(__dirname, applicationDirectory);

const serverOutputFilePath = {
	file: path.join(serverOutputDirectory, 'server.js'),
	format: 'esm'
};

const lwcConfiguration = {
	input: lwcInputFilePath,
	output: lwcOutputFilePath,
	plugins: [
		resolve(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(node_environment),
			preventAssignment: true
		}),
		lwc(),
		copy({
			targets: [
				{src: 'src/client/index.html', dest: lwcOutputDirectory},
				{src: 'assets', dest: clientDirectory}
			]
		})
	]
};

const serverConfig = {
	external: ['express', 'path', 'url'],
	input: serverInputFilePath,
	output: serverOutputFilePath,
	plugins: [isDevEnvironment && run()]
};

export default [lwcConfiguration, serverConfig];
