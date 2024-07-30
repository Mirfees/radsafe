import FtpDeploy from "ftp-deploy";
import { path } from "../config/path.js";
const ftpDeploy = new FtpDeploy();

export const cssFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/css';
    config.localRoot = path.absolutePath + "/dist/css";

    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));

}

export const jsFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/js';
    config.localRoot = path.absolutePath + "/dist/js";
    
    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));

}

export const htmlFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/html';
    config.localRoot = path.absolutePath + "/dist";
    config.include = ["*.html"];
    
    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));

}

export const fontsFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/fonts';
    config.localRoot = path.absolutePath + "/dist/fonts";
    
    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));
        
}

export const filesFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/files';
    config.localRoot = path.absolutePath + "/dist/files";
    
    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));
        
}

export const imgFtp = async () => {
    const config = Object.assign({}, app.ftpOptions);
    config.remoteRoot = '/webroot/img';
    config.localRoot = path.absolutePath + "/dist/img";
    
    await ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));
        
}