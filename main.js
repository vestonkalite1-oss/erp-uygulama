// ERP Takip Programı - masaüstü uygulaması (Electron)
// Program, internetteki siteyi kendi penceresinde açar; Chrome gerekmez.
const { app, BrowserWindow, session, shell } = require("electron");
const path = require("path");

const SITE = "https://statuesque-granita-4b93d0.netlify.app";

if (!app.requestSingleInstanceLock()) { app.quit(); }

let pencere = null;
function ac() {
  pencere = new BrowserWindow({
    width: 1366, height: 860, minWidth: 900, minHeight: 600,
    title: "ERP Takip Programı",
    icon: path.join(__dirname, "icon.png"),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  pencere.removeMenu();
  pencere.loadURL(SITE);
  // internet yoksa / site açılamazsa bilgi sayfası
  pencere.webContents.on("did-fail-load", (e, kod, aciklama, url, anaCerceve) => {
    if (anaCerceve && kod !== -3) pencere.loadFile(path.join(__dirname, "offline.html"));
  });
  // dış bağlantılar sistem tarayıcısında açılsın
  pencere.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(SITE)) shell.openExternal(url);
    return { action: "deny" };
  });
  pencere.on("closed", () => { pencere = null; });
}

app.on("second-instance", () => { if (pencere) { if (pencere.isMinimized()) pencere.restore(); pencere.focus(); } });
app.whenReady().then(() => {
  app.setAppUserModelId("com.veston.erptakip.masaustu");
  // kamera/mikrofon ve panoya yazma izinleri yalnızca bu site için
  session.defaultSession.setPermissionRequestHandler((wc, izin, geri) => {
    geri(["media", "clipboard-sanitized-write"].includes(izin) && wc.getURL().startsWith(SITE));
  });
  ac();
  app.on("activate", () => { if (!pencere) ac(); });
});
app.on("window-all-closed", () => app.quit());
