const rp_fs = {
    read: (path) => {
        renpy_exec(`with open('` + path + `', 'r') as f:
    print(f.read())`);
    },
    write: (path, data) => {
        renpy_exec(`with open('` + path + `', 'w') as f:
    f.write('` + data + `')`);
    },
    look: (path) => {
        renpy_exec('print(os.listdir(\'' + path + '\'))');
    }
}
