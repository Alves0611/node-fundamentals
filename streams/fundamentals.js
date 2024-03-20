import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    constructor(options) {
        super(options);
        this.index = 1;
    }

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 100) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(i), 'utf-8'); 
                this.push(buf);
            }
        }, 1000);
    }
}

new OneToHundredStream()
    .pipe(process.stdout); 
