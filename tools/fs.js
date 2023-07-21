rp_fs = {
    read: (path, callback) => {
        renpy_exec(`with open('` + path + `', 'r') as f:
    globals()["file_output"] = f.read()`);
        renpy_get("file_output").then(callback)
    },
    write: (path, data) => {
        renpy_exec(`with open('` + path + `', 'w') as f:
    f.write('` + data + `')`);
    },
    look: (path, callback) => {
        renpy_set("files", [])
        renpy_exec('globals()["files"] = os.listdir(\'' + path + '\')');
        renpy_get("files").then(callback)
    }
}
