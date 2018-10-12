/* Typescript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require('bs-platform/lib/js/block.js');

// tslint:disable-next-line:no-var-requires
const TypesBS = require('./Types.bs');

import {list} from '../../src/shims/ReasonPervasives.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = number;

export const someIntList: list<number> = TypesBS.someIntList;

export const map: <T1,T2>(_1:(_1:T1) => T2, _2:list<T1>) => list<T2> = TypesBS.map;

// tslint:disable-next-line:max-classes-per-file 
export abstract class TypeWithVarsA<x,y> { protected opaque!: x | y }; /* simulate opaque types */

export const A: <x,y>(_1:x, _2:y) => TypeWithVarsA<x,y> = function _(Arg1, Arg2) { return CreateBucklescriptBlock.__(0 as any, [Arg1, Arg2]) }

// tslint:disable-next-line:max-classes-per-file 
export abstract class TypeWithVarsB<z> { protected opaque!: z }; /* simulate opaque types */

export const B: <z>(_1:z) => TypeWithVarsB<z> = function _(Arg1) { return CreateBucklescriptBlock.__(1 as any, [Arg1]) }

export type typeWithVars<x,y,z> =
  | TypeWithVarsA<x,y>
  | TypeWithVarsB<z>;
