/* TypeScript file generated by genType. */

const $$toJS636506023 = {"97": "a", "98": "bRenamed", "937218926": true, "-574635695": 20};

const $$toRE636506023 = {"a": 97, "bRenamed": 98, "true": 937218926, "20": -574635695};

// tslint:disable-next-line:no-var-requires
const EnumsWithPayloadBS = require('./EnumsWithPayload.bs');

// tslint:disable-next-line:interface-over-type-literal
export type payload = {readonly x: number, readonly y?: string};

// tslint:disable-next-line:interface-over-type-literal
export type withPayload = "a" | "bRenamed" | true | 20 | payload;

export const testWithPayload: (_1:withPayload) => withPayload = function _(Arg1: any) { const result = EnumsWithPayloadBS.testWithPayload((typeof(Arg1) === 'object' ? [/* c */99, [Arg1.x, Arg1.y]] : $$toRE636506023[Arg1.toString()])); return (typeof(result) === 'object' ? {x:result[1][0], y:result[1][1]} : $$toJS636506023[result]) };

export const printEnumValue: (_1:withPayload) => void = function _(Arg1: any) { const result = EnumsWithPayloadBS.printEnumValue((typeof(Arg1) === 'object' ? [/* c */99, [Arg1.x, Arg1.y]] : $$toRE636506023[Arg1.toString()])); return result };
