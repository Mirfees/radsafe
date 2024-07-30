// Настройки для выгрузки результата на FTP - сервер
import { path } from "./path.js";


export const ftpOptions = {
    user: "lelikfjk_test",
    password: "3zKALs*C",
    host: "test-task.ru.net",
    port: 21,
    localRoot: path.absolutePath + "/test-folder",
    remoteRoot: "/public_html/remote-folder/",
    include: ["*", "**/*"],      // this would upload everything except dot files
    //include: ["*.php", "dist/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};