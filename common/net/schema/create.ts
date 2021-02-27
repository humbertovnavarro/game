// Generated by packetc v0.3.4 at Sat, 27 Feb 2021 15:47:51 +0000
import { Reader, Writer } from "packet";
export namespace Create {
    export interface Position {
        x: number,
        y: number,
    }
}
export class Create {
    constructor(
        public id: number,
        public position: Create.Position,
    ) {}
    static read(data: ArrayBuffer): Create | null {
        let reader = new Reader(data);
        let output = Object.create(Create);
        output.id = reader.read_uint32();
        let output_position: any = {};
        output_position.x = reader.read_float();
        output_position.y = reader.read_float();
        output.position = output_position;
        if (reader.failed) return null;
        return output;
    }
    write(buffer?: ArrayBuffer): ArrayBuffer {
        let writer = buffer ? new Writer(buffer) : new Writer();
        writer.write_uint32(this.id);
        writer.write_float(this.position.x);
        writer.write_float(this.position.y);
        return writer.finish();
    }
}
