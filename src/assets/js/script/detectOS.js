const iconPath = "assets/img/icons/"
const btnDownload = document.querySelector("[data-button='download']");
var osName = "Nome S.O";
if (navigator.appVersion.indexOf("Win")!=-1) osName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) osName="Apple";
if (navigator.appVersion.indexOf("X11")!=-1) osName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) osName="Linux";
btnDownload.innerHTML += `<img src="${iconPath}icon-${osName}.svg" class="icon">Baixar para o ${osName}` 