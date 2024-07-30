// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
// Импорт ftp настроек
import { ftpOptions } from "./gulp/config/ftp.js";

// Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    ftpOptions: ftpOptions
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { css } from "./gulp/tasks/css.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { cssFtp, jsFtp, htmlFtp, fontsFtp, filesFtp, imgFtp } from "./gulp/tasks/ftp.js";
import { otfToTtf, ttfToWoff, fontsStyle, copyFonts } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.scss, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(copyFonts, otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, css, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deploy = gulp.series(cssFtp, jsFtp, htmlFtp, fontsFtp, filesFtp, imgFtp);

// Выполнение сценария по умолчанию
gulp.task('default', dev);
gulp.task('deploy', deploy);
