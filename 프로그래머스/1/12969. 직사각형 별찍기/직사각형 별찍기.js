process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (i = 0; i < b; i++) {
        let str = ""
        for (r = 0; r < a; r++) {
            str += "*";
        }
        console.log(str);
    }
});