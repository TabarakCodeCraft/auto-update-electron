const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            // devTools: isDev,
            allowRendererProcessReuse: false,
        },
        autoHideMenuBar: true,
        width: 1300,
        height: 800,
        // minWidth: 1040,
        // minHeight: 670,
        show: false,
    });
    splash = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false,
            allowRendererProcessReuse: false,
            nativeWindowOpen: true,
        },
        autoHideMenuBar: true,
        width: 500,
        height: 500,
        minWidth: 500,
        minHeight: 500,
        show: true,
        frame: false,
    });

    //win.loadFile(`./dist/index.html`);
    //win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
    // splash.loadFile("./src/splash.html");
    win.loadFile("./index.html");


    win.once("ready-to-show", () => {
        splash.close();
        win.show();
    });

    win.on("closed", function () {
        win = null;
        app.quit();
    });
}
//test
app.on("ready", createWindow);
app.on("window-all-closed", function () {
    app.quit();
});

app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});

app.whenReady(() => {
    app.allowRendererProcessReuse = false;
});
