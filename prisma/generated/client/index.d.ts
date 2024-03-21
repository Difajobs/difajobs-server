
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ListCertificate
 * 
 */
export type ListCertificate = $Result.DefaultSelection<Prisma.$ListCertificatePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model ListDisability
 * 
 */
export type ListDisability = $Result.DefaultSelection<Prisma.$ListDisabilityPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model Disability
 * 
 */
export type Disability = $Result.DefaultSelection<Prisma.$DisabilityPayload>
/**
 * Model Ability
 * 
 */
export type Ability = $Result.DefaultSelection<Prisma.$AbilityPayload>
/**
 * Model ListSkill
 * 
 */
export type ListSkill = $Result.DefaultSelection<Prisma.$ListSkillPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ListJobSkill
 * 
 */
export type ListJobSkill = $Result.DefaultSelection<Prisma.$ListJobSkillPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.listCertificate`: Exposes CRUD operations for the **ListCertificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListCertificates
    * const listCertificates = await prisma.listCertificate.findMany()
    * ```
    */
  get listCertificate(): Prisma.ListCertificateDelegate<ExtArgs>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs>;

  /**
   * `prisma.listDisability`: Exposes CRUD operations for the **ListDisability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListDisabilities
    * const listDisabilities = await prisma.listDisability.findMany()
    * ```
    */
  get listDisability(): Prisma.ListDisabilityDelegate<ExtArgs>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs>;

  /**
   * `prisma.disability`: Exposes CRUD operations for the **Disability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disabilities
    * const disabilities = await prisma.disability.findMany()
    * ```
    */
  get disability(): Prisma.DisabilityDelegate<ExtArgs>;

  /**
   * `prisma.ability`: Exposes CRUD operations for the **Ability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abilities
    * const abilities = await prisma.ability.findMany()
    * ```
    */
  get ability(): Prisma.AbilityDelegate<ExtArgs>;

  /**
   * `prisma.listSkill`: Exposes CRUD operations for the **ListSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListSkills
    * const listSkills = await prisma.listSkill.findMany()
    * ```
    */
  get listSkill(): Prisma.ListSkillDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.listJobSkill`: Exposes CRUD operations for the **ListJobSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListJobSkills
    * const listJobSkills = await prisma.listJobSkill.findMany()
    * ```
    */
  get listJobSkill(): Prisma.ListJobSkillDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ListCertificate: 'ListCertificate',
    Skill: 'Skill',
    ListDisability: 'ListDisability',
    JobApplication: 'JobApplication',
    Disability: 'Disability',
    Ability: 'Ability',
    ListSkill: 'ListSkill',
    Company: 'Company',
    Category: 'Category',
    ListJobSkill: 'ListJobSkill',
    Job: 'Job'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'listCertificate' | 'skill' | 'listDisability' | 'jobApplication' | 'disability' | 'ability' | 'listSkill' | 'company' | 'category' | 'listJobSkill' | 'job'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ListCertificate: {
        payload: Prisma.$ListCertificatePayload<ExtArgs>
        fields: Prisma.ListCertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListCertificateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListCertificateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          findFirst: {
            args: Prisma.ListCertificateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListCertificateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          findMany: {
            args: Prisma.ListCertificateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>[]
          }
          create: {
            args: Prisma.ListCertificateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          createMany: {
            args: Prisma.ListCertificateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListCertificateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          update: {
            args: Prisma.ListCertificateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          deleteMany: {
            args: Prisma.ListCertificateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListCertificateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListCertificateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListCertificatePayload>
          }
          aggregate: {
            args: Prisma.ListCertificateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListCertificate>
          }
          groupBy: {
            args: Prisma.ListCertificateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListCertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCertificateCountArgs<ExtArgs>,
            result: $Utils.Optional<ListCertificateCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>,
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      ListDisability: {
        payload: Prisma.$ListDisabilityPayload<ExtArgs>
        fields: Prisma.ListDisabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListDisabilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListDisabilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          findFirst: {
            args: Prisma.ListDisabilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListDisabilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          findMany: {
            args: Prisma.ListDisabilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>[]
          }
          create: {
            args: Prisma.ListDisabilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          createMany: {
            args: Prisma.ListDisabilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListDisabilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          update: {
            args: Prisma.ListDisabilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          deleteMany: {
            args: Prisma.ListDisabilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListDisabilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListDisabilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListDisabilityPayload>
          }
          aggregate: {
            args: Prisma.ListDisabilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListDisability>
          }
          groupBy: {
            args: Prisma.ListDisabilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListDisabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListDisabilityCountArgs<ExtArgs>,
            result: $Utils.Optional<ListDisabilityCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      Disability: {
        payload: Prisma.$DisabilityPayload<ExtArgs>
        fields: Prisma.DisabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisabilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisabilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          findFirst: {
            args: Prisma.DisabilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisabilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          findMany: {
            args: Prisma.DisabilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>[]
          }
          create: {
            args: Prisma.DisabilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          createMany: {
            args: Prisma.DisabilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DisabilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          update: {
            args: Prisma.DisabilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          deleteMany: {
            args: Prisma.DisabilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DisabilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DisabilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisabilityPayload>
          }
          aggregate: {
            args: Prisma.DisabilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDisability>
          }
          groupBy: {
            args: Prisma.DisabilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DisabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisabilityCountArgs<ExtArgs>,
            result: $Utils.Optional<DisabilityCountAggregateOutputType> | number
          }
        }
      }
      Ability: {
        payload: Prisma.$AbilityPayload<ExtArgs>
        fields: Prisma.AbilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findFirst: {
            args: Prisma.AbilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findMany: {
            args: Prisma.AbilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          create: {
            args: Prisma.AbilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          createMany: {
            args: Prisma.AbilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AbilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          update: {
            args: Prisma.AbilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          deleteMany: {
            args: Prisma.AbilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AbilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          aggregate: {
            args: Prisma.AbilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAbility>
          }
          groupBy: {
            args: Prisma.AbilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AbilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityCountArgs<ExtArgs>,
            result: $Utils.Optional<AbilityCountAggregateOutputType> | number
          }
        }
      }
      ListSkill: {
        payload: Prisma.$ListSkillPayload<ExtArgs>
        fields: Prisma.ListSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListSkillFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListSkillFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          findFirst: {
            args: Prisma.ListSkillFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListSkillFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          findMany: {
            args: Prisma.ListSkillFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>[]
          }
          create: {
            args: Prisma.ListSkillCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          createMany: {
            args: Prisma.ListSkillCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListSkillDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          update: {
            args: Prisma.ListSkillUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          deleteMany: {
            args: Prisma.ListSkillDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListSkillUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListSkillUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListSkillPayload>
          }
          aggregate: {
            args: Prisma.ListSkillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListSkill>
          }
          groupBy: {
            args: Prisma.ListSkillGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListSkillCountArgs<ExtArgs>,
            result: $Utils.Optional<ListSkillCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ListJobSkill: {
        payload: Prisma.$ListJobSkillPayload<ExtArgs>
        fields: Prisma.ListJobSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListJobSkillFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListJobSkillFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          findFirst: {
            args: Prisma.ListJobSkillFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListJobSkillFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          findMany: {
            args: Prisma.ListJobSkillFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>[]
          }
          create: {
            args: Prisma.ListJobSkillCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          createMany: {
            args: Prisma.ListJobSkillCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListJobSkillDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          update: {
            args: Prisma.ListJobSkillUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          deleteMany: {
            args: Prisma.ListJobSkillDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListJobSkillUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListJobSkillUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListJobSkillPayload>
          }
          aggregate: {
            args: Prisma.ListJobSkillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListJobSkill>
          }
          groupBy: {
            args: Prisma.ListJobSkillGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListJobSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListJobSkillCountArgs<ExtArgs>,
            result: $Utils.Optional<ListJobSkillCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    certificates: number
    disabilities: number
    jobApplications: number
    skills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
    disabilities?: boolean | UserCountOutputTypeCountDisabilitiesArgs
    jobApplications?: boolean | UserCountOutputTypeCountJobApplicationsArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListCertificateWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListDisabilityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListSkillWhereInput
  }



  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
    jobs: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
    jobs?: boolean | SkillCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListSkillWhereInput
  }


  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListJobSkillWhereInput
  }



  /**
   * Count Type DisabilityCountOutputType
   */

  export type DisabilityCountOutputType = {
    users: number
  }

  export type DisabilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DisabilityCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * DisabilityCountOutputType without action
   */
  export type DisabilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisabilityCountOutputType
     */
    select?: DisabilityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DisabilityCountOutputType without action
   */
  export type DisabilityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListDisabilityWhereInput
  }



  /**
   * Count Type AbilityCountOutputType
   */

  export type AbilityCountOutputType = {
    jobs: number
  }

  export type AbilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | AbilityCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes

  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilityCountOutputType
     */
    select?: AbilityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AbilityCountOutputType without action
   */
  export type AbilityCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobApplications: number
    jobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | CompanyCountOutputTypeCountJobApplicationsArgs
    jobs?: boolean | CompanyCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    disabilities: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disabilities?: boolean | CategoryCountOutputTypeCountDisabilitiesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDisabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisabilityWhereInput
  }



  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
    skills: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
    skills?: boolean | JobCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListJobSkillWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    city: string | null
    is_verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    city: string | null
    is_verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone_number: number
    city: number
    is_verified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    city?: true
    is_verified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    city?: true
    is_verified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    city?: true
    is_verified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string | null
    city: string | null
    is_verified: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    city?: boolean
    is_verified?: boolean
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    disabilities?: boolean | User$disabilitiesArgs<ExtArgs>
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    city?: boolean
    is_verified?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    disabilities?: boolean | User$disabilitiesArgs<ExtArgs>
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      certificates: Prisma.$ListCertificatePayload<ExtArgs>[]
      disabilities: Prisma.$ListDisabilityPayload<ExtArgs>[]
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      skills: Prisma.$ListSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone_number: string | null
      city: string | null
      is_verified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    disabilities<T extends User$disabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$disabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    jobApplications<T extends User$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    where?: ListCertificateWhereInput
    orderBy?: ListCertificateOrderByWithRelationInput | ListCertificateOrderByWithRelationInput[]
    cursor?: ListCertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListCertificateScalarFieldEnum | ListCertificateScalarFieldEnum[]
  }


  /**
   * User.disabilities
   */
  export type User$disabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    where?: ListDisabilityWhereInput
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    cursor?: ListDisabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListDisabilityScalarFieldEnum | ListDisabilityScalarFieldEnum[]
  }


  /**
   * User.jobApplications
   */
  export type User$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    where?: ListSkillWhereInput
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    cursor?: ListSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListSkillScalarFieldEnum | ListSkillScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ListCertificate
   */

  export type AggregateListCertificate = {
    _count: ListCertificateCountAggregateOutputType | null
    _avg: ListCertificateAvgAggregateOutputType | null
    _sum: ListCertificateSumAggregateOutputType | null
    _min: ListCertificateMinAggregateOutputType | null
    _max: ListCertificateMaxAggregateOutputType | null
  }

  export type ListCertificateAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ListCertificateSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ListCertificateMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    user_id: number | null
  }

  export type ListCertificateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    user_id: number | null
  }

  export type ListCertificateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    user_id: number
    _all: number
  }


  export type ListCertificateAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ListCertificateSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ListCertificateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
  }

  export type ListCertificateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
  }

  export type ListCertificateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    _all?: true
  }

  export type ListCertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListCertificate to aggregate.
     */
    where?: ListCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListCertificates to fetch.
     */
    orderBy?: ListCertificateOrderByWithRelationInput | ListCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListCertificates
    **/
    _count?: true | ListCertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListCertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListCertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListCertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListCertificateMaxAggregateInputType
  }

  export type GetListCertificateAggregateType<T extends ListCertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateListCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListCertificate[P]>
      : GetScalarType<T[P], AggregateListCertificate[P]>
  }




  export type ListCertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListCertificateWhereInput
    orderBy?: ListCertificateOrderByWithAggregationInput | ListCertificateOrderByWithAggregationInput[]
    by: ListCertificateScalarFieldEnum[] | ListCertificateScalarFieldEnum
    having?: ListCertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCertificateCountAggregateInputType | true
    _avg?: ListCertificateAvgAggregateInputType
    _sum?: ListCertificateSumAggregateInputType
    _min?: ListCertificateMinAggregateInputType
    _max?: ListCertificateMaxAggregateInputType
  }

  export type ListCertificateGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    user_id: number
    _count: ListCertificateCountAggregateOutputType | null
    _avg: ListCertificateAvgAggregateOutputType | null
    _sum: ListCertificateSumAggregateOutputType | null
    _min: ListCertificateMinAggregateOutputType | null
    _max: ListCertificateMaxAggregateOutputType | null
  }

  type GetListCertificateGroupByPayload<T extends ListCertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListCertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListCertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListCertificateGroupByOutputType[P]>
            : GetScalarType<T[P], ListCertificateGroupByOutputType[P]>
        }
      >
    >


  export type ListCertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listCertificate"]>

  export type ListCertificateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
  }

  export type ListCertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ListCertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListCertificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      user_id: number
    }, ExtArgs["result"]["listCertificate"]>
    composites: {}
  }


  type ListCertificateGetPayload<S extends boolean | null | undefined | ListCertificateDefaultArgs> = $Result.GetResult<Prisma.$ListCertificatePayload, S>

  type ListCertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListCertificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListCertificateCountAggregateInputType | true
    }

  export interface ListCertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListCertificate'], meta: { name: 'ListCertificate' } }
    /**
     * Find zero or one ListCertificate that matches the filter.
     * @param {ListCertificateFindUniqueArgs} args - Arguments to find a ListCertificate
     * @example
     * // Get one ListCertificate
     * const listCertificate = await prisma.listCertificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListCertificateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateFindUniqueArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ListCertificate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListCertificateFindUniqueOrThrowArgs} args - Arguments to find a ListCertificate
     * @example
     * // Get one ListCertificate
     * const listCertificate = await prisma.listCertificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListCertificateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ListCertificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateFindFirstArgs} args - Arguments to find a ListCertificate
     * @example
     * // Get one ListCertificate
     * const listCertificate = await prisma.listCertificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListCertificateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateFindFirstArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ListCertificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateFindFirstOrThrowArgs} args - Arguments to find a ListCertificate
     * @example
     * // Get one ListCertificate
     * const listCertificate = await prisma.listCertificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListCertificateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ListCertificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListCertificates
     * const listCertificates = await prisma.listCertificate.findMany()
     * 
     * // Get first 10 ListCertificates
     * const listCertificates = await prisma.listCertificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listCertificateWithIdOnly = await prisma.listCertificate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListCertificateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ListCertificate.
     * @param {ListCertificateCreateArgs} args - Arguments to create a ListCertificate.
     * @example
     * // Create one ListCertificate
     * const ListCertificate = await prisma.listCertificate.create({
     *   data: {
     *     // ... data to create a ListCertificate
     *   }
     * })
     * 
    **/
    create<T extends ListCertificateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateCreateArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ListCertificates.
     *     @param {ListCertificateCreateManyArgs} args - Arguments to create many ListCertificates.
     *     @example
     *     // Create many ListCertificates
     *     const listCertificate = await prisma.listCertificate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListCertificateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListCertificate.
     * @param {ListCertificateDeleteArgs} args - Arguments to delete one ListCertificate.
     * @example
     * // Delete one ListCertificate
     * const ListCertificate = await prisma.listCertificate.delete({
     *   where: {
     *     // ... filter to delete one ListCertificate
     *   }
     * })
     * 
    **/
    delete<T extends ListCertificateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateDeleteArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ListCertificate.
     * @param {ListCertificateUpdateArgs} args - Arguments to update one ListCertificate.
     * @example
     * // Update one ListCertificate
     * const listCertificate = await prisma.listCertificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListCertificateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateUpdateArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ListCertificates.
     * @param {ListCertificateDeleteManyArgs} args - Arguments to filter ListCertificates to delete.
     * @example
     * // Delete a few ListCertificates
     * const { count } = await prisma.listCertificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListCertificateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCertificateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListCertificates
     * const listCertificate = await prisma.listCertificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListCertificateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListCertificate.
     * @param {ListCertificateUpsertArgs} args - Arguments to update or create a ListCertificate.
     * @example
     * // Update or create a ListCertificate
     * const listCertificate = await prisma.listCertificate.upsert({
     *   create: {
     *     // ... data to create a ListCertificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListCertificate we want to update
     *   }
     * })
    **/
    upsert<T extends ListCertificateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListCertificateUpsertArgs<ExtArgs>>
    ): Prisma__ListCertificateClient<$Result.GetResult<Prisma.$ListCertificatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ListCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateCountArgs} args - Arguments to filter ListCertificates to count.
     * @example
     * // Count the number of ListCertificates
     * const count = await prisma.listCertificate.count({
     *   where: {
     *     // ... the filter for the ListCertificates we want to count
     *   }
     * })
    **/
    count<T extends ListCertificateCountArgs>(
      args?: Subset<T, ListCertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListCertificateAggregateArgs>(args: Subset<T, ListCertificateAggregateArgs>): Prisma.PrismaPromise<GetListCertificateAggregateType<T>>

    /**
     * Group by ListCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListCertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListCertificateGroupByArgs['orderBy'] }
        : { orderBy?: ListCertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListCertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListCertificate model
   */
  readonly fields: ListCertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListCertificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListCertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ListCertificate model
   */ 
  interface ListCertificateFieldRefs {
    readonly id: FieldRef<"ListCertificate", 'Int'>
    readonly name: FieldRef<"ListCertificate", 'String'>
    readonly description: FieldRef<"ListCertificate", 'String'>
    readonly user_id: FieldRef<"ListCertificate", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ListCertificate findUnique
   */
  export type ListCertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter, which ListCertificate to fetch.
     */
    where: ListCertificateWhereUniqueInput
  }


  /**
   * ListCertificate findUniqueOrThrow
   */
  export type ListCertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter, which ListCertificate to fetch.
     */
    where: ListCertificateWhereUniqueInput
  }


  /**
   * ListCertificate findFirst
   */
  export type ListCertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter, which ListCertificate to fetch.
     */
    where?: ListCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListCertificates to fetch.
     */
    orderBy?: ListCertificateOrderByWithRelationInput | ListCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListCertificates.
     */
    cursor?: ListCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListCertificates.
     */
    distinct?: ListCertificateScalarFieldEnum | ListCertificateScalarFieldEnum[]
  }


  /**
   * ListCertificate findFirstOrThrow
   */
  export type ListCertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter, which ListCertificate to fetch.
     */
    where?: ListCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListCertificates to fetch.
     */
    orderBy?: ListCertificateOrderByWithRelationInput | ListCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListCertificates.
     */
    cursor?: ListCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListCertificates.
     */
    distinct?: ListCertificateScalarFieldEnum | ListCertificateScalarFieldEnum[]
  }


  /**
   * ListCertificate findMany
   */
  export type ListCertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter, which ListCertificates to fetch.
     */
    where?: ListCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListCertificates to fetch.
     */
    orderBy?: ListCertificateOrderByWithRelationInput | ListCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListCertificates.
     */
    cursor?: ListCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListCertificates.
     */
    skip?: number
    distinct?: ListCertificateScalarFieldEnum | ListCertificateScalarFieldEnum[]
  }


  /**
   * ListCertificate create
   */
  export type ListCertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a ListCertificate.
     */
    data: XOR<ListCertificateCreateInput, ListCertificateUncheckedCreateInput>
  }


  /**
   * ListCertificate createMany
   */
  export type ListCertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListCertificates.
     */
    data: ListCertificateCreateManyInput | ListCertificateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ListCertificate update
   */
  export type ListCertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a ListCertificate.
     */
    data: XOR<ListCertificateUpdateInput, ListCertificateUncheckedUpdateInput>
    /**
     * Choose, which ListCertificate to update.
     */
    where: ListCertificateWhereUniqueInput
  }


  /**
   * ListCertificate updateMany
   */
  export type ListCertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListCertificates.
     */
    data: XOR<ListCertificateUpdateManyMutationInput, ListCertificateUncheckedUpdateManyInput>
    /**
     * Filter which ListCertificates to update
     */
    where?: ListCertificateWhereInput
  }


  /**
   * ListCertificate upsert
   */
  export type ListCertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the ListCertificate to update in case it exists.
     */
    where: ListCertificateWhereUniqueInput
    /**
     * In case the ListCertificate found by the `where` argument doesn't exist, create a new ListCertificate with this data.
     */
    create: XOR<ListCertificateCreateInput, ListCertificateUncheckedCreateInput>
    /**
     * In case the ListCertificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListCertificateUpdateInput, ListCertificateUncheckedUpdateInput>
  }


  /**
   * ListCertificate delete
   */
  export type ListCertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
    /**
     * Filter which ListCertificate to delete.
     */
    where: ListCertificateWhereUniqueInput
  }


  /**
   * ListCertificate deleteMany
   */
  export type ListCertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListCertificates to delete
     */
    where?: ListCertificateWhereInput
  }


  /**
   * ListCertificate without action
   */
  export type ListCertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCertificate
     */
    select?: ListCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListCertificateInclude<ExtArgs> | null
  }



  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Skill$usersArgs<ExtArgs>
    jobs?: boolean | Skill$jobsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    jobs?: boolean | Skill$jobsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      users: Prisma.$ListSkillPayload<ExtArgs>[]
      jobs: Prisma.$ListJobSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }


  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
    **/
    create<T extends SkillCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillCreateArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skills.
     *     @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skill = await prisma.skill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
    **/
    delete<T extends SkillDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
    **/
    upsert<T extends SkillUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>
    ): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Skill$usersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findMany'> | Null>;

    jobs<T extends Skill$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }


  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }


  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }


  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }


  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }


  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }


  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }


  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
  }


  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }


  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }


  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
  }


  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    where?: ListSkillWhereInput
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    cursor?: ListSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListSkillScalarFieldEnum | ListSkillScalarFieldEnum[]
  }


  /**
   * Skill.jobs
   */
  export type Skill$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    where?: ListJobSkillWhereInput
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    cursor?: ListJobSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListJobSkillScalarFieldEnum | ListJobSkillScalarFieldEnum[]
  }


  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillInclude<ExtArgs> | null
  }



  /**
   * Model ListDisability
   */

  export type AggregateListDisability = {
    _count: ListDisabilityCountAggregateOutputType | null
    _avg: ListDisabilityAvgAggregateOutputType | null
    _sum: ListDisabilitySumAggregateOutputType | null
    _min: ListDisabilityMinAggregateOutputType | null
    _max: ListDisabilityMaxAggregateOutputType | null
  }

  export type ListDisabilityAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    disability_id: number | null
  }

  export type ListDisabilitySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    disability_id: number | null
  }

  export type ListDisabilityMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    disability_id: number | null
  }

  export type ListDisabilityMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    disability_id: number | null
  }

  export type ListDisabilityCountAggregateOutputType = {
    id: number
    user_id: number
    disability_id: number
    _all: number
  }


  export type ListDisabilityAvgAggregateInputType = {
    id?: true
    user_id?: true
    disability_id?: true
  }

  export type ListDisabilitySumAggregateInputType = {
    id?: true
    user_id?: true
    disability_id?: true
  }

  export type ListDisabilityMinAggregateInputType = {
    id?: true
    user_id?: true
    disability_id?: true
  }

  export type ListDisabilityMaxAggregateInputType = {
    id?: true
    user_id?: true
    disability_id?: true
  }

  export type ListDisabilityCountAggregateInputType = {
    id?: true
    user_id?: true
    disability_id?: true
    _all?: true
  }

  export type ListDisabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListDisability to aggregate.
     */
    where?: ListDisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListDisabilities to fetch.
     */
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListDisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListDisabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListDisabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListDisabilities
    **/
    _count?: true | ListDisabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListDisabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListDisabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListDisabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListDisabilityMaxAggregateInputType
  }

  export type GetListDisabilityAggregateType<T extends ListDisabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateListDisability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListDisability[P]>
      : GetScalarType<T[P], AggregateListDisability[P]>
  }




  export type ListDisabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListDisabilityWhereInput
    orderBy?: ListDisabilityOrderByWithAggregationInput | ListDisabilityOrderByWithAggregationInput[]
    by: ListDisabilityScalarFieldEnum[] | ListDisabilityScalarFieldEnum
    having?: ListDisabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListDisabilityCountAggregateInputType | true
    _avg?: ListDisabilityAvgAggregateInputType
    _sum?: ListDisabilitySumAggregateInputType
    _min?: ListDisabilityMinAggregateInputType
    _max?: ListDisabilityMaxAggregateInputType
  }

  export type ListDisabilityGroupByOutputType = {
    id: number
    user_id: number
    disability_id: number
    _count: ListDisabilityCountAggregateOutputType | null
    _avg: ListDisabilityAvgAggregateOutputType | null
    _sum: ListDisabilitySumAggregateOutputType | null
    _min: ListDisabilityMinAggregateOutputType | null
    _max: ListDisabilityMaxAggregateOutputType | null
  }

  type GetListDisabilityGroupByPayload<T extends ListDisabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListDisabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListDisabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListDisabilityGroupByOutputType[P]>
            : GetScalarType<T[P], ListDisabilityGroupByOutputType[P]>
        }
      >
    >


  export type ListDisabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    disability_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listDisability"]>

  export type ListDisabilitySelectScalar = {
    id?: boolean
    user_id?: boolean
    disability_id?: boolean
  }

  export type ListDisabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
  }


  export type $ListDisabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListDisability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      disability: Prisma.$DisabilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      disability_id: number
    }, ExtArgs["result"]["listDisability"]>
    composites: {}
  }


  type ListDisabilityGetPayload<S extends boolean | null | undefined | ListDisabilityDefaultArgs> = $Result.GetResult<Prisma.$ListDisabilityPayload, S>

  type ListDisabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListDisabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListDisabilityCountAggregateInputType | true
    }

  export interface ListDisabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListDisability'], meta: { name: 'ListDisability' } }
    /**
     * Find zero or one ListDisability that matches the filter.
     * @param {ListDisabilityFindUniqueArgs} args - Arguments to find a ListDisability
     * @example
     * // Get one ListDisability
     * const listDisability = await prisma.listDisability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListDisabilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityFindUniqueArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ListDisability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListDisabilityFindUniqueOrThrowArgs} args - Arguments to find a ListDisability
     * @example
     * // Get one ListDisability
     * const listDisability = await prisma.listDisability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListDisabilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ListDisability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityFindFirstArgs} args - Arguments to find a ListDisability
     * @example
     * // Get one ListDisability
     * const listDisability = await prisma.listDisability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListDisabilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityFindFirstArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ListDisability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityFindFirstOrThrowArgs} args - Arguments to find a ListDisability
     * @example
     * // Get one ListDisability
     * const listDisability = await prisma.listDisability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListDisabilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ListDisabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListDisabilities
     * const listDisabilities = await prisma.listDisability.findMany()
     * 
     * // Get first 10 ListDisabilities
     * const listDisabilities = await prisma.listDisability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listDisabilityWithIdOnly = await prisma.listDisability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListDisabilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ListDisability.
     * @param {ListDisabilityCreateArgs} args - Arguments to create a ListDisability.
     * @example
     * // Create one ListDisability
     * const ListDisability = await prisma.listDisability.create({
     *   data: {
     *     // ... data to create a ListDisability
     *   }
     * })
     * 
    **/
    create<T extends ListDisabilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityCreateArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ListDisabilities.
     *     @param {ListDisabilityCreateManyArgs} args - Arguments to create many ListDisabilities.
     *     @example
     *     // Create many ListDisabilities
     *     const listDisability = await prisma.listDisability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListDisabilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListDisability.
     * @param {ListDisabilityDeleteArgs} args - Arguments to delete one ListDisability.
     * @example
     * // Delete one ListDisability
     * const ListDisability = await prisma.listDisability.delete({
     *   where: {
     *     // ... filter to delete one ListDisability
     *   }
     * })
     * 
    **/
    delete<T extends ListDisabilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityDeleteArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ListDisability.
     * @param {ListDisabilityUpdateArgs} args - Arguments to update one ListDisability.
     * @example
     * // Update one ListDisability
     * const listDisability = await prisma.listDisability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListDisabilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityUpdateArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ListDisabilities.
     * @param {ListDisabilityDeleteManyArgs} args - Arguments to filter ListDisabilities to delete.
     * @example
     * // Delete a few ListDisabilities
     * const { count } = await prisma.listDisability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListDisabilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDisabilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListDisabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListDisabilities
     * const listDisability = await prisma.listDisability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListDisabilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListDisability.
     * @param {ListDisabilityUpsertArgs} args - Arguments to update or create a ListDisability.
     * @example
     * // Update or create a ListDisability
     * const listDisability = await prisma.listDisability.upsert({
     *   create: {
     *     // ... data to create a ListDisability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListDisability we want to update
     *   }
     * })
    **/
    upsert<T extends ListDisabilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListDisabilityUpsertArgs<ExtArgs>>
    ): Prisma__ListDisabilityClient<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ListDisabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityCountArgs} args - Arguments to filter ListDisabilities to count.
     * @example
     * // Count the number of ListDisabilities
     * const count = await prisma.listDisability.count({
     *   where: {
     *     // ... the filter for the ListDisabilities we want to count
     *   }
     * })
    **/
    count<T extends ListDisabilityCountArgs>(
      args?: Subset<T, ListDisabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListDisabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListDisability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListDisabilityAggregateArgs>(args: Subset<T, ListDisabilityAggregateArgs>): Prisma.PrismaPromise<GetListDisabilityAggregateType<T>>

    /**
     * Group by ListDisability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListDisabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListDisabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListDisabilityGroupByArgs['orderBy'] }
        : { orderBy?: ListDisabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListDisabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListDisabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListDisability model
   */
  readonly fields: ListDisabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListDisability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListDisabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    disability<T extends DisabilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisabilityDefaultArgs<ExtArgs>>): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ListDisability model
   */ 
  interface ListDisabilityFieldRefs {
    readonly id: FieldRef<"ListDisability", 'Int'>
    readonly user_id: FieldRef<"ListDisability", 'Int'>
    readonly disability_id: FieldRef<"ListDisability", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ListDisability findUnique
   */
  export type ListDisabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter, which ListDisability to fetch.
     */
    where: ListDisabilityWhereUniqueInput
  }


  /**
   * ListDisability findUniqueOrThrow
   */
  export type ListDisabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter, which ListDisability to fetch.
     */
    where: ListDisabilityWhereUniqueInput
  }


  /**
   * ListDisability findFirst
   */
  export type ListDisabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter, which ListDisability to fetch.
     */
    where?: ListDisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListDisabilities to fetch.
     */
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListDisabilities.
     */
    cursor?: ListDisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListDisabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListDisabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListDisabilities.
     */
    distinct?: ListDisabilityScalarFieldEnum | ListDisabilityScalarFieldEnum[]
  }


  /**
   * ListDisability findFirstOrThrow
   */
  export type ListDisabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter, which ListDisability to fetch.
     */
    where?: ListDisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListDisabilities to fetch.
     */
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListDisabilities.
     */
    cursor?: ListDisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListDisabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListDisabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListDisabilities.
     */
    distinct?: ListDisabilityScalarFieldEnum | ListDisabilityScalarFieldEnum[]
  }


  /**
   * ListDisability findMany
   */
  export type ListDisabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter, which ListDisabilities to fetch.
     */
    where?: ListDisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListDisabilities to fetch.
     */
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListDisabilities.
     */
    cursor?: ListDisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListDisabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListDisabilities.
     */
    skip?: number
    distinct?: ListDisabilityScalarFieldEnum | ListDisabilityScalarFieldEnum[]
  }


  /**
   * ListDisability create
   */
  export type ListDisabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ListDisability.
     */
    data: XOR<ListDisabilityCreateInput, ListDisabilityUncheckedCreateInput>
  }


  /**
   * ListDisability createMany
   */
  export type ListDisabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListDisabilities.
     */
    data: ListDisabilityCreateManyInput | ListDisabilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ListDisability update
   */
  export type ListDisabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ListDisability.
     */
    data: XOR<ListDisabilityUpdateInput, ListDisabilityUncheckedUpdateInput>
    /**
     * Choose, which ListDisability to update.
     */
    where: ListDisabilityWhereUniqueInput
  }


  /**
   * ListDisability updateMany
   */
  export type ListDisabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListDisabilities.
     */
    data: XOR<ListDisabilityUpdateManyMutationInput, ListDisabilityUncheckedUpdateManyInput>
    /**
     * Filter which ListDisabilities to update
     */
    where?: ListDisabilityWhereInput
  }


  /**
   * ListDisability upsert
   */
  export type ListDisabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ListDisability to update in case it exists.
     */
    where: ListDisabilityWhereUniqueInput
    /**
     * In case the ListDisability found by the `where` argument doesn't exist, create a new ListDisability with this data.
     */
    create: XOR<ListDisabilityCreateInput, ListDisabilityUncheckedCreateInput>
    /**
     * In case the ListDisability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListDisabilityUpdateInput, ListDisabilityUncheckedUpdateInput>
  }


  /**
   * ListDisability delete
   */
  export type ListDisabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    /**
     * Filter which ListDisability to delete.
     */
    where: ListDisabilityWhereUniqueInput
  }


  /**
   * ListDisability deleteMany
   */
  export type ListDisabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListDisabilities to delete
     */
    where?: ListDisabilityWhereInput
  }


  /**
   * ListDisability without action
   */
  export type ListDisabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
  }



  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    company_id: number | null
  }

  export type JobApplicationSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    company_id: number | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    company_id: number | null
    status: string | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    company_id: number | null
    status: string | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    user_id: number
    job_id: number
    company_id: number
    status: number
    _all: number
  }


  export type JobApplicationAvgAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    company_id?: true
  }

  export type JobApplicationSumAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    company_id?: true
  }

  export type JobApplicationMinAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    company_id?: true
    status?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    company_id?: true
    status?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    company_id?: true
    status?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _avg?: JobApplicationAvgAggregateInputType
    _sum?: JobApplicationSumAggregateInputType
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: number
    user_id: number
    job_id: number
    company_id: number
    status: string
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_id?: boolean
    company_id?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    user_id?: boolean
    job_id?: boolean
    company_id?: boolean
    status?: boolean
  }

  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }


  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      job_id: number
      company_id: number
      status: string
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }


  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JobApplication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
    **/
    create<T extends JobApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many JobApplications.
     *     @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     *     @example
     *     // Create many JobApplications
     *     const jobApplication = await prisma.jobApplication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
    **/
    delete<T extends JobApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
    **/
    upsert<T extends JobApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>
    ): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JobApplication model
   */ 
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'Int'>
    readonly user_id: FieldRef<"JobApplication", 'Int'>
    readonly job_id: FieldRef<"JobApplication", 'Int'>
    readonly company_id: FieldRef<"JobApplication", 'Int'>
    readonly status: FieldRef<"JobApplication", 'String'>
  }
    

  // Custom InputTypes

  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }


  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }


  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }


  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }


  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
  }


  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }


  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }


  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
  }


  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }



  /**
   * Model Disability
   */

  export type AggregateDisability = {
    _count: DisabilityCountAggregateOutputType | null
    _avg: DisabilityAvgAggregateOutputType | null
    _sum: DisabilitySumAggregateOutputType | null
    _min: DisabilityMinAggregateOutputType | null
    _max: DisabilityMaxAggregateOutputType | null
  }

  export type DisabilityAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type DisabilitySumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type DisabilityMinAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
  }

  export type DisabilityMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
  }

  export type DisabilityCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    description: number
    _all: number
  }


  export type DisabilityAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type DisabilitySumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type DisabilityMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
  }

  export type DisabilityMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
  }

  export type DisabilityCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type DisabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disability to aggregate.
     */
    where?: DisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disabilities to fetch.
     */
    orderBy?: DisabilityOrderByWithRelationInput | DisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disabilities
    **/
    _count?: true | DisabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisabilityMaxAggregateInputType
  }

  export type GetDisabilityAggregateType<T extends DisabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDisability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisability[P]>
      : GetScalarType<T[P], AggregateDisability[P]>
  }




  export type DisabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisabilityWhereInput
    orderBy?: DisabilityOrderByWithAggregationInput | DisabilityOrderByWithAggregationInput[]
    by: DisabilityScalarFieldEnum[] | DisabilityScalarFieldEnum
    having?: DisabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisabilityCountAggregateInputType | true
    _avg?: DisabilityAvgAggregateInputType
    _sum?: DisabilitySumAggregateInputType
    _min?: DisabilityMinAggregateInputType
    _max?: DisabilityMaxAggregateInputType
  }

  export type DisabilityGroupByOutputType = {
    id: number
    category_id: number
    name: string
    description: string
    _count: DisabilityCountAggregateOutputType | null
    _avg: DisabilityAvgAggregateOutputType | null
    _sum: DisabilitySumAggregateOutputType | null
    _min: DisabilityMinAggregateOutputType | null
    _max: DisabilityMaxAggregateOutputType | null
  }

  type GetDisabilityGroupByPayload<T extends DisabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DisabilityGroupByOutputType[P]>
        }
      >
    >


  export type DisabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    users?: boolean | Disability$usersArgs<ExtArgs>
    _count?: boolean | DisabilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disability"]>

  export type DisabilitySelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type DisabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    users?: boolean | Disability$usersArgs<ExtArgs>
    _count?: boolean | DisabilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DisabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disability"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      users: Prisma.$ListDisabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number
      name: string
      description: string
    }, ExtArgs["result"]["disability"]>
    composites: {}
  }


  type DisabilityGetPayload<S extends boolean | null | undefined | DisabilityDefaultArgs> = $Result.GetResult<Prisma.$DisabilityPayload, S>

  type DisabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DisabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DisabilityCountAggregateInputType | true
    }

  export interface DisabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disability'], meta: { name: 'Disability' } }
    /**
     * Find zero or one Disability that matches the filter.
     * @param {DisabilityFindUniqueArgs} args - Arguments to find a Disability
     * @example
     * // Get one Disability
     * const disability = await prisma.disability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DisabilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityFindUniqueArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Disability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DisabilityFindUniqueOrThrowArgs} args - Arguments to find a Disability
     * @example
     * // Get one Disability
     * const disability = await prisma.disability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DisabilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Disability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityFindFirstArgs} args - Arguments to find a Disability
     * @example
     * // Get one Disability
     * const disability = await prisma.disability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DisabilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityFindFirstArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Disability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityFindFirstOrThrowArgs} args - Arguments to find a Disability
     * @example
     * // Get one Disability
     * const disability = await prisma.disability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DisabilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Disabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disabilities
     * const disabilities = await prisma.disability.findMany()
     * 
     * // Get first 10 Disabilities
     * const disabilities = await prisma.disability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disabilityWithIdOnly = await prisma.disability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DisabilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Disability.
     * @param {DisabilityCreateArgs} args - Arguments to create a Disability.
     * @example
     * // Create one Disability
     * const Disability = await prisma.disability.create({
     *   data: {
     *     // ... data to create a Disability
     *   }
     * })
     * 
    **/
    create<T extends DisabilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityCreateArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Disabilities.
     *     @param {DisabilityCreateManyArgs} args - Arguments to create many Disabilities.
     *     @example
     *     // Create many Disabilities
     *     const disability = await prisma.disability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DisabilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disability.
     * @param {DisabilityDeleteArgs} args - Arguments to delete one Disability.
     * @example
     * // Delete one Disability
     * const Disability = await prisma.disability.delete({
     *   where: {
     *     // ... filter to delete one Disability
     *   }
     * })
     * 
    **/
    delete<T extends DisabilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityDeleteArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Disability.
     * @param {DisabilityUpdateArgs} args - Arguments to update one Disability.
     * @example
     * // Update one Disability
     * const disability = await prisma.disability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DisabilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityUpdateArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Disabilities.
     * @param {DisabilityDeleteManyArgs} args - Arguments to filter Disabilities to delete.
     * @example
     * // Delete a few Disabilities
     * const { count } = await prisma.disability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DisabilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisabilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disabilities
     * const disability = await prisma.disability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DisabilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disability.
     * @param {DisabilityUpsertArgs} args - Arguments to update or create a Disability.
     * @example
     * // Update or create a Disability
     * const disability = await prisma.disability.upsert({
     *   create: {
     *     // ... data to create a Disability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disability we want to update
     *   }
     * })
    **/
    upsert<T extends DisabilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DisabilityUpsertArgs<ExtArgs>>
    ): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Disabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityCountArgs} args - Arguments to filter Disabilities to count.
     * @example
     * // Count the number of Disabilities
     * const count = await prisma.disability.count({
     *   where: {
     *     // ... the filter for the Disabilities we want to count
     *   }
     * })
    **/
    count<T extends DisabilityCountArgs>(
      args?: Subset<T, DisabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisabilityAggregateArgs>(args: Subset<T, DisabilityAggregateArgs>): Prisma.PrismaPromise<GetDisabilityAggregateType<T>>

    /**
     * Group by Disability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisabilityGroupByArgs['orderBy'] }
        : { orderBy?: DisabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disability model
   */
  readonly fields: DisabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends Disability$usersArgs<ExtArgs> = {}>(args?: Subset<T, Disability$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListDisabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Disability model
   */ 
  interface DisabilityFieldRefs {
    readonly id: FieldRef<"Disability", 'Int'>
    readonly category_id: FieldRef<"Disability", 'Int'>
    readonly name: FieldRef<"Disability", 'String'>
    readonly description: FieldRef<"Disability", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Disability findUnique
   */
  export type DisabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter, which Disability to fetch.
     */
    where: DisabilityWhereUniqueInput
  }


  /**
   * Disability findUniqueOrThrow
   */
  export type DisabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter, which Disability to fetch.
     */
    where: DisabilityWhereUniqueInput
  }


  /**
   * Disability findFirst
   */
  export type DisabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter, which Disability to fetch.
     */
    where?: DisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disabilities to fetch.
     */
    orderBy?: DisabilityOrderByWithRelationInput | DisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disabilities.
     */
    cursor?: DisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disabilities.
     */
    distinct?: DisabilityScalarFieldEnum | DisabilityScalarFieldEnum[]
  }


  /**
   * Disability findFirstOrThrow
   */
  export type DisabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter, which Disability to fetch.
     */
    where?: DisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disabilities to fetch.
     */
    orderBy?: DisabilityOrderByWithRelationInput | DisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disabilities.
     */
    cursor?: DisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disabilities.
     */
    distinct?: DisabilityScalarFieldEnum | DisabilityScalarFieldEnum[]
  }


  /**
   * Disability findMany
   */
  export type DisabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter, which Disabilities to fetch.
     */
    where?: DisabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disabilities to fetch.
     */
    orderBy?: DisabilityOrderByWithRelationInput | DisabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disabilities.
     */
    cursor?: DisabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disabilities.
     */
    skip?: number
    distinct?: DisabilityScalarFieldEnum | DisabilityScalarFieldEnum[]
  }


  /**
   * Disability create
   */
  export type DisabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Disability.
     */
    data: XOR<DisabilityCreateInput, DisabilityUncheckedCreateInput>
  }


  /**
   * Disability createMany
   */
  export type DisabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disabilities.
     */
    data: DisabilityCreateManyInput | DisabilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Disability update
   */
  export type DisabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Disability.
     */
    data: XOR<DisabilityUpdateInput, DisabilityUncheckedUpdateInput>
    /**
     * Choose, which Disability to update.
     */
    where: DisabilityWhereUniqueInput
  }


  /**
   * Disability updateMany
   */
  export type DisabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disabilities.
     */
    data: XOR<DisabilityUpdateManyMutationInput, DisabilityUncheckedUpdateManyInput>
    /**
     * Filter which Disabilities to update
     */
    where?: DisabilityWhereInput
  }


  /**
   * Disability upsert
   */
  export type DisabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Disability to update in case it exists.
     */
    where: DisabilityWhereUniqueInput
    /**
     * In case the Disability found by the `where` argument doesn't exist, create a new Disability with this data.
     */
    create: XOR<DisabilityCreateInput, DisabilityUncheckedCreateInput>
    /**
     * In case the Disability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisabilityUpdateInput, DisabilityUncheckedUpdateInput>
  }


  /**
   * Disability delete
   */
  export type DisabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    /**
     * Filter which Disability to delete.
     */
    where: DisabilityWhereUniqueInput
  }


  /**
   * Disability deleteMany
   */
  export type DisabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disabilities to delete
     */
    where?: DisabilityWhereInput
  }


  /**
   * Disability.users
   */
  export type Disability$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListDisability
     */
    select?: ListDisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListDisabilityInclude<ExtArgs> | null
    where?: ListDisabilityWhereInput
    orderBy?: ListDisabilityOrderByWithRelationInput | ListDisabilityOrderByWithRelationInput[]
    cursor?: ListDisabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListDisabilityScalarFieldEnum | ListDisabilityScalarFieldEnum[]
  }


  /**
   * Disability without action
   */
  export type DisabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
  }



  /**
   * Model Ability
   */

  export type AggregateAbility = {
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  export type AbilityAvgAggregateOutputType = {
    id: number | null
  }

  export type AbilitySumAggregateOutputType = {
    id: number | null
  }

  export type AbilityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AbilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AbilityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AbilityAvgAggregateInputType = {
    id?: true
  }

  export type AbilitySumAggregateInputType = {
    id?: true
  }

  export type AbilityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AbilityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AbilityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AbilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ability to aggregate.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abilities
    **/
    _count?: true | AbilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityMaxAggregateInputType
  }

  export type GetAbilityAggregateType<T extends AbilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAbility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbility[P]>
      : GetScalarType<T[P], AggregateAbility[P]>
  }




  export type AbilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithAggregationInput | AbilityOrderByWithAggregationInput[]
    by: AbilityScalarFieldEnum[] | AbilityScalarFieldEnum
    having?: AbilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityCountAggregateInputType | true
    _avg?: AbilityAvgAggregateInputType
    _sum?: AbilitySumAggregateInputType
    _min?: AbilityMinAggregateInputType
    _max?: AbilityMaxAggregateInputType
  }

  export type AbilityGroupByOutputType = {
    id: number
    name: string
    _count: AbilityCountAggregateOutputType | null
    _avg: AbilityAvgAggregateOutputType | null
    _sum: AbilitySumAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  type GetAbilityGroupByPayload<T extends AbilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityGroupByOutputType[P]>
        }
      >
    >


  export type AbilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    jobs?: boolean | Ability$jobsArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Ability$jobsArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ability"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["ability"]>
    composites: {}
  }


  type AbilityGetPayload<S extends boolean | null | undefined | AbilityDefaultArgs> = $Result.GetResult<Prisma.$AbilityPayload, S>

  type AbilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AbilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AbilityCountAggregateInputType | true
    }

  export interface AbilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ability'], meta: { name: 'Ability' } }
    /**
     * Find zero or one Ability that matches the filter.
     * @param {AbilityFindUniqueArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AbilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityFindUniqueArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AbilityFindUniqueOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AbilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AbilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityFindFirstArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AbilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abilities
     * const abilities = await prisma.ability.findMany()
     * 
     * // Get first 10 Abilities
     * const abilities = await prisma.ability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abilityWithIdOnly = await prisma.ability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AbilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ability.
     * @param {AbilityCreateArgs} args - Arguments to create a Ability.
     * @example
     * // Create one Ability
     * const Ability = await prisma.ability.create({
     *   data: {
     *     // ... data to create a Ability
     *   }
     * })
     * 
    **/
    create<T extends AbilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityCreateArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Abilities.
     *     @param {AbilityCreateManyArgs} args - Arguments to create many Abilities.
     *     @example
     *     // Create many Abilities
     *     const ability = await prisma.ability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AbilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ability.
     * @param {AbilityDeleteArgs} args - Arguments to delete one Ability.
     * @example
     * // Delete one Ability
     * const Ability = await prisma.ability.delete({
     *   where: {
     *     // ... filter to delete one Ability
     *   }
     * })
     * 
    **/
    delete<T extends AbilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityDeleteArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ability.
     * @param {AbilityUpdateArgs} args - Arguments to update one Ability.
     * @example
     * // Update one Ability
     * const ability = await prisma.ability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AbilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityUpdateArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Abilities.
     * @param {AbilityDeleteManyArgs} args - Arguments to filter Abilities to delete.
     * @example
     * // Delete a few Abilities
     * const { count } = await prisma.ability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AbilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AbilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ability.
     * @param {AbilityUpsertArgs} args - Arguments to update or create a Ability.
     * @example
     * // Update or create a Ability
     * const ability = await prisma.ability.upsert({
     *   create: {
     *     // ... data to create a Ability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ability we want to update
     *   }
     * })
    **/
    upsert<T extends AbilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AbilityUpsertArgs<ExtArgs>>
    ): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityCountArgs} args - Arguments to filter Abilities to count.
     * @example
     * // Count the number of Abilities
     * const count = await prisma.ability.count({
     *   where: {
     *     // ... the filter for the Abilities we want to count
     *   }
     * })
    **/
    count<T extends AbilityCountArgs>(
      args?: Subset<T, AbilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbilityAggregateArgs>(args: Subset<T, AbilityAggregateArgs>): Prisma.PrismaPromise<GetAbilityAggregateType<T>>

    /**
     * Group by Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityGroupByArgs['orderBy'] }
        : { orderBy?: AbilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ability model
   */
  readonly fields: AbilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobs<T extends Ability$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Ability$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ability model
   */ 
  interface AbilityFieldRefs {
    readonly id: FieldRef<"Ability", 'Int'>
    readonly name: FieldRef<"Ability", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Ability findUnique
   */
  export type AbilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }


  /**
   * Ability findUniqueOrThrow
   */
  export type AbilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }


  /**
   * Ability findFirst
   */
  export type AbilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }


  /**
   * Ability findFirstOrThrow
   */
  export type AbilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }


  /**
   * Ability findMany
   */
  export type AbilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }


  /**
   * Ability create
   */
  export type AbilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Ability.
     */
    data: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
  }


  /**
   * Ability createMany
   */
  export type AbilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ability update
   */
  export type AbilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Ability.
     */
    data: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
    /**
     * Choose, which Ability to update.
     */
    where: AbilityWhereUniqueInput
  }


  /**
   * Ability updateMany
   */
  export type AbilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
  }


  /**
   * Ability upsert
   */
  export type AbilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Ability to update in case it exists.
     */
    where: AbilityWhereUniqueInput
    /**
     * In case the Ability found by the `where` argument doesn't exist, create a new Ability with this data.
     */
    create: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
    /**
     * In case the Ability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
  }


  /**
   * Ability delete
   */
  export type AbilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter which Ability to delete.
     */
    where: AbilityWhereUniqueInput
  }


  /**
   * Ability deleteMany
   */
  export type AbilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to delete
     */
    where?: AbilityWhereInput
  }


  /**
   * Ability.jobs
   */
  export type Ability$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Ability without action
   */
  export type AbilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
  }



  /**
   * Model ListSkill
   */

  export type AggregateListSkill = {
    _count: ListSkillCountAggregateOutputType | null
    _avg: ListSkillAvgAggregateOutputType | null
    _sum: ListSkillSumAggregateOutputType | null
    _min: ListSkillMinAggregateOutputType | null
    _max: ListSkillMaxAggregateOutputType | null
  }

  export type ListSkillAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    skill_id: number | null
  }

  export type ListSkillSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    skill_id: number | null
  }

  export type ListSkillMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    skill_id: number | null
  }

  export type ListSkillMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    skill_id: number | null
  }

  export type ListSkillCountAggregateOutputType = {
    id: number
    user_id: number
    skill_id: number
    _all: number
  }


  export type ListSkillAvgAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
  }

  export type ListSkillSumAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
  }

  export type ListSkillMinAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
  }

  export type ListSkillMaxAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
  }

  export type ListSkillCountAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
    _all?: true
  }

  export type ListSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListSkill to aggregate.
     */
    where?: ListSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListSkills to fetch.
     */
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListSkills
    **/
    _count?: true | ListSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListSkillMaxAggregateInputType
  }

  export type GetListSkillAggregateType<T extends ListSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateListSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListSkill[P]>
      : GetScalarType<T[P], AggregateListSkill[P]>
  }




  export type ListSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListSkillWhereInput
    orderBy?: ListSkillOrderByWithAggregationInput | ListSkillOrderByWithAggregationInput[]
    by: ListSkillScalarFieldEnum[] | ListSkillScalarFieldEnum
    having?: ListSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListSkillCountAggregateInputType | true
    _avg?: ListSkillAvgAggregateInputType
    _sum?: ListSkillSumAggregateInputType
    _min?: ListSkillMinAggregateInputType
    _max?: ListSkillMaxAggregateInputType
  }

  export type ListSkillGroupByOutputType = {
    id: number
    user_id: number
    skill_id: number
    _count: ListSkillCountAggregateOutputType | null
    _avg: ListSkillAvgAggregateOutputType | null
    _sum: ListSkillSumAggregateOutputType | null
    _min: ListSkillMinAggregateOutputType | null
    _max: ListSkillMaxAggregateOutputType | null
  }

  type GetListSkillGroupByPayload<T extends ListSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ListSkillGroupByOutputType[P]>
        }
      >
    >


  export type ListSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listSkill"]>

  export type ListSkillSelectScalar = {
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
  }

  export type ListSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }


  export type $ListSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      skill_id: number
    }, ExtArgs["result"]["listSkill"]>
    composites: {}
  }


  type ListSkillGetPayload<S extends boolean | null | undefined | ListSkillDefaultArgs> = $Result.GetResult<Prisma.$ListSkillPayload, S>

  type ListSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListSkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListSkillCountAggregateInputType | true
    }

  export interface ListSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListSkill'], meta: { name: 'ListSkill' } }
    /**
     * Find zero or one ListSkill that matches the filter.
     * @param {ListSkillFindUniqueArgs} args - Arguments to find a ListSkill
     * @example
     * // Get one ListSkill
     * const listSkill = await prisma.listSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListSkillFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillFindUniqueArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ListSkill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListSkillFindUniqueOrThrowArgs} args - Arguments to find a ListSkill
     * @example
     * // Get one ListSkill
     * const listSkill = await prisma.listSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListSkillFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ListSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillFindFirstArgs} args - Arguments to find a ListSkill
     * @example
     * // Get one ListSkill
     * const listSkill = await prisma.listSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListSkillFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillFindFirstArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ListSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillFindFirstOrThrowArgs} args - Arguments to find a ListSkill
     * @example
     * // Get one ListSkill
     * const listSkill = await prisma.listSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListSkillFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ListSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListSkills
     * const listSkills = await prisma.listSkill.findMany()
     * 
     * // Get first 10 ListSkills
     * const listSkills = await prisma.listSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listSkillWithIdOnly = await prisma.listSkill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListSkillFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ListSkill.
     * @param {ListSkillCreateArgs} args - Arguments to create a ListSkill.
     * @example
     * // Create one ListSkill
     * const ListSkill = await prisma.listSkill.create({
     *   data: {
     *     // ... data to create a ListSkill
     *   }
     * })
     * 
    **/
    create<T extends ListSkillCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillCreateArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ListSkills.
     *     @param {ListSkillCreateManyArgs} args - Arguments to create many ListSkills.
     *     @example
     *     // Create many ListSkills
     *     const listSkill = await prisma.listSkill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListSkillCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListSkill.
     * @param {ListSkillDeleteArgs} args - Arguments to delete one ListSkill.
     * @example
     * // Delete one ListSkill
     * const ListSkill = await prisma.listSkill.delete({
     *   where: {
     *     // ... filter to delete one ListSkill
     *   }
     * })
     * 
    **/
    delete<T extends ListSkillDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillDeleteArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ListSkill.
     * @param {ListSkillUpdateArgs} args - Arguments to update one ListSkill.
     * @example
     * // Update one ListSkill
     * const listSkill = await prisma.listSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListSkillUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillUpdateArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ListSkills.
     * @param {ListSkillDeleteManyArgs} args - Arguments to filter ListSkills to delete.
     * @example
     * // Delete a few ListSkills
     * const { count } = await prisma.listSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListSkillDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListSkillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListSkills
     * const listSkill = await prisma.listSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListSkillUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListSkill.
     * @param {ListSkillUpsertArgs} args - Arguments to update or create a ListSkill.
     * @example
     * // Update or create a ListSkill
     * const listSkill = await prisma.listSkill.upsert({
     *   create: {
     *     // ... data to create a ListSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListSkill we want to update
     *   }
     * })
    **/
    upsert<T extends ListSkillUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListSkillUpsertArgs<ExtArgs>>
    ): Prisma__ListSkillClient<$Result.GetResult<Prisma.$ListSkillPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ListSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillCountArgs} args - Arguments to filter ListSkills to count.
     * @example
     * // Count the number of ListSkills
     * const count = await prisma.listSkill.count({
     *   where: {
     *     // ... the filter for the ListSkills we want to count
     *   }
     * })
    **/
    count<T extends ListSkillCountArgs>(
      args?: Subset<T, ListSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListSkillAggregateArgs>(args: Subset<T, ListSkillAggregateArgs>): Prisma.PrismaPromise<GetListSkillAggregateType<T>>

    /**
     * Group by ListSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListSkillGroupByArgs['orderBy'] }
        : { orderBy?: ListSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListSkill model
   */
  readonly fields: ListSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ListSkill model
   */ 
  interface ListSkillFieldRefs {
    readonly id: FieldRef<"ListSkill", 'Int'>
    readonly user_id: FieldRef<"ListSkill", 'Int'>
    readonly skill_id: FieldRef<"ListSkill", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ListSkill findUnique
   */
  export type ListSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListSkill to fetch.
     */
    where: ListSkillWhereUniqueInput
  }


  /**
   * ListSkill findUniqueOrThrow
   */
  export type ListSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListSkill to fetch.
     */
    where: ListSkillWhereUniqueInput
  }


  /**
   * ListSkill findFirst
   */
  export type ListSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListSkill to fetch.
     */
    where?: ListSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListSkills to fetch.
     */
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListSkills.
     */
    cursor?: ListSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListSkills.
     */
    distinct?: ListSkillScalarFieldEnum | ListSkillScalarFieldEnum[]
  }


  /**
   * ListSkill findFirstOrThrow
   */
  export type ListSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListSkill to fetch.
     */
    where?: ListSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListSkills to fetch.
     */
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListSkills.
     */
    cursor?: ListSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListSkills.
     */
    distinct?: ListSkillScalarFieldEnum | ListSkillScalarFieldEnum[]
  }


  /**
   * ListSkill findMany
   */
  export type ListSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListSkills to fetch.
     */
    where?: ListSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListSkills to fetch.
     */
    orderBy?: ListSkillOrderByWithRelationInput | ListSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListSkills.
     */
    cursor?: ListSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListSkills.
     */
    skip?: number
    distinct?: ListSkillScalarFieldEnum | ListSkillScalarFieldEnum[]
  }


  /**
   * ListSkill create
   */
  export type ListSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ListSkill.
     */
    data: XOR<ListSkillCreateInput, ListSkillUncheckedCreateInput>
  }


  /**
   * ListSkill createMany
   */
  export type ListSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListSkills.
     */
    data: ListSkillCreateManyInput | ListSkillCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ListSkill update
   */
  export type ListSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ListSkill.
     */
    data: XOR<ListSkillUpdateInput, ListSkillUncheckedUpdateInput>
    /**
     * Choose, which ListSkill to update.
     */
    where: ListSkillWhereUniqueInput
  }


  /**
   * ListSkill updateMany
   */
  export type ListSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListSkills.
     */
    data: XOR<ListSkillUpdateManyMutationInput, ListSkillUncheckedUpdateManyInput>
    /**
     * Filter which ListSkills to update
     */
    where?: ListSkillWhereInput
  }


  /**
   * ListSkill upsert
   */
  export type ListSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ListSkill to update in case it exists.
     */
    where: ListSkillWhereUniqueInput
    /**
     * In case the ListSkill found by the `where` argument doesn't exist, create a new ListSkill with this data.
     */
    create: XOR<ListSkillCreateInput, ListSkillUncheckedCreateInput>
    /**
     * In case the ListSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListSkillUpdateInput, ListSkillUncheckedUpdateInput>
  }


  /**
   * ListSkill delete
   */
  export type ListSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
    /**
     * Filter which ListSkill to delete.
     */
    where: ListSkillWhereUniqueInput
  }


  /**
   * ListSkill deleteMany
   */
  export type ListSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListSkills to delete
     */
    where?: ListSkillWhereInput
  }


  /**
   * ListSkill without action
   */
  export type ListSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListSkill
     */
    select?: ListSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListSkillInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    about: string | null
    logo: string | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    about: string | null
    logo: string | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    city: number
    about: number
    logo: number
    picture: number
    email: number
    password: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
    email?: true
    password?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
    email?: true
    password?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
    email?: true
    password?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    city: string
    about: string
    logo: string | null
    picture: string | null
    email: string
    password: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    about?: boolean
    logo?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    jobApplications?: boolean | Company$jobApplicationsArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    about?: boolean
    logo?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | Company$jobApplicationsArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      about: string
      logo: string | null
      picture: string | null
      email: string
      password: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobApplications<T extends Company$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    jobs<T extends Company$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly about: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly picture: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly password: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.jobApplications
   */
  export type Company$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * Company.jobs
   */
  export type Company$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    disabilities?: boolean | Category$disabilitiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disabilities?: boolean | Category$disabilitiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      disabilities: Prisma.$DisabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    disabilities<T extends Category$disabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$disabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.disabilities
   */
  export type Category$disabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disability
     */
    select?: DisabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisabilityInclude<ExtArgs> | null
    where?: DisabilityWhereInput
    orderBy?: DisabilityOrderByWithRelationInput | DisabilityOrderByWithRelationInput[]
    cursor?: DisabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisabilityScalarFieldEnum | DisabilityScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model ListJobSkill
   */

  export type AggregateListJobSkill = {
    _count: ListJobSkillCountAggregateOutputType | null
    _avg: ListJobSkillAvgAggregateOutputType | null
    _sum: ListJobSkillSumAggregateOutputType | null
    _min: ListJobSkillMinAggregateOutputType | null
    _max: ListJobSkillMaxAggregateOutputType | null
  }

  export type ListJobSkillAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type ListJobSkillSumAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type ListJobSkillMinAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type ListJobSkillMaxAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type ListJobSkillCountAggregateOutputType = {
    id: number
    job_id: number
    skill_id: number
    _all: number
  }


  export type ListJobSkillAvgAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type ListJobSkillSumAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type ListJobSkillMinAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type ListJobSkillMaxAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type ListJobSkillCountAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
    _all?: true
  }

  export type ListJobSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListJobSkill to aggregate.
     */
    where?: ListJobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListJobSkills to fetch.
     */
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListJobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListJobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListJobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListJobSkills
    **/
    _count?: true | ListJobSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListJobSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListJobSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListJobSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListJobSkillMaxAggregateInputType
  }

  export type GetListJobSkillAggregateType<T extends ListJobSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateListJobSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListJobSkill[P]>
      : GetScalarType<T[P], AggregateListJobSkill[P]>
  }




  export type ListJobSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListJobSkillWhereInput
    orderBy?: ListJobSkillOrderByWithAggregationInput | ListJobSkillOrderByWithAggregationInput[]
    by: ListJobSkillScalarFieldEnum[] | ListJobSkillScalarFieldEnum
    having?: ListJobSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListJobSkillCountAggregateInputType | true
    _avg?: ListJobSkillAvgAggregateInputType
    _sum?: ListJobSkillSumAggregateInputType
    _min?: ListJobSkillMinAggregateInputType
    _max?: ListJobSkillMaxAggregateInputType
  }

  export type ListJobSkillGroupByOutputType = {
    id: number
    job_id: number
    skill_id: number
    _count: ListJobSkillCountAggregateOutputType | null
    _avg: ListJobSkillAvgAggregateOutputType | null
    _sum: ListJobSkillSumAggregateOutputType | null
    _min: ListJobSkillMinAggregateOutputType | null
    _max: ListJobSkillMaxAggregateOutputType | null
  }

  type GetListJobSkillGroupByPayload<T extends ListJobSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListJobSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListJobSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListJobSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ListJobSkillGroupByOutputType[P]>
        }
      >
    >


  export type ListJobSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listJobSkill"]>

  export type ListJobSkillSelectScalar = {
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
  }

  export type ListJobSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }


  export type $ListJobSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListJobSkill"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_id: number
      skill_id: number
    }, ExtArgs["result"]["listJobSkill"]>
    composites: {}
  }


  type ListJobSkillGetPayload<S extends boolean | null | undefined | ListJobSkillDefaultArgs> = $Result.GetResult<Prisma.$ListJobSkillPayload, S>

  type ListJobSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListJobSkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListJobSkillCountAggregateInputType | true
    }

  export interface ListJobSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListJobSkill'], meta: { name: 'ListJobSkill' } }
    /**
     * Find zero or one ListJobSkill that matches the filter.
     * @param {ListJobSkillFindUniqueArgs} args - Arguments to find a ListJobSkill
     * @example
     * // Get one ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListJobSkillFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillFindUniqueArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ListJobSkill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListJobSkillFindUniqueOrThrowArgs} args - Arguments to find a ListJobSkill
     * @example
     * // Get one ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListJobSkillFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ListJobSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillFindFirstArgs} args - Arguments to find a ListJobSkill
     * @example
     * // Get one ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListJobSkillFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillFindFirstArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ListJobSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillFindFirstOrThrowArgs} args - Arguments to find a ListJobSkill
     * @example
     * // Get one ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListJobSkillFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ListJobSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListJobSkills
     * const listJobSkills = await prisma.listJobSkill.findMany()
     * 
     * // Get first 10 ListJobSkills
     * const listJobSkills = await prisma.listJobSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listJobSkillWithIdOnly = await prisma.listJobSkill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListJobSkillFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ListJobSkill.
     * @param {ListJobSkillCreateArgs} args - Arguments to create a ListJobSkill.
     * @example
     * // Create one ListJobSkill
     * const ListJobSkill = await prisma.listJobSkill.create({
     *   data: {
     *     // ... data to create a ListJobSkill
     *   }
     * })
     * 
    **/
    create<T extends ListJobSkillCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillCreateArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ListJobSkills.
     *     @param {ListJobSkillCreateManyArgs} args - Arguments to create many ListJobSkills.
     *     @example
     *     // Create many ListJobSkills
     *     const listJobSkill = await prisma.listJobSkill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListJobSkillCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListJobSkill.
     * @param {ListJobSkillDeleteArgs} args - Arguments to delete one ListJobSkill.
     * @example
     * // Delete one ListJobSkill
     * const ListJobSkill = await prisma.listJobSkill.delete({
     *   where: {
     *     // ... filter to delete one ListJobSkill
     *   }
     * })
     * 
    **/
    delete<T extends ListJobSkillDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillDeleteArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ListJobSkill.
     * @param {ListJobSkillUpdateArgs} args - Arguments to update one ListJobSkill.
     * @example
     * // Update one ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListJobSkillUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillUpdateArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ListJobSkills.
     * @param {ListJobSkillDeleteManyArgs} args - Arguments to filter ListJobSkills to delete.
     * @example
     * // Delete a few ListJobSkills
     * const { count } = await prisma.listJobSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListJobSkillDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListJobSkillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListJobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListJobSkills
     * const listJobSkill = await prisma.listJobSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListJobSkillUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListJobSkill.
     * @param {ListJobSkillUpsertArgs} args - Arguments to update or create a ListJobSkill.
     * @example
     * // Update or create a ListJobSkill
     * const listJobSkill = await prisma.listJobSkill.upsert({
     *   create: {
     *     // ... data to create a ListJobSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListJobSkill we want to update
     *   }
     * })
    **/
    upsert<T extends ListJobSkillUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListJobSkillUpsertArgs<ExtArgs>>
    ): Prisma__ListJobSkillClient<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ListJobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillCountArgs} args - Arguments to filter ListJobSkills to count.
     * @example
     * // Count the number of ListJobSkills
     * const count = await prisma.listJobSkill.count({
     *   where: {
     *     // ... the filter for the ListJobSkills we want to count
     *   }
     * })
    **/
    count<T extends ListJobSkillCountArgs>(
      args?: Subset<T, ListJobSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListJobSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListJobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListJobSkillAggregateArgs>(args: Subset<T, ListJobSkillAggregateArgs>): Prisma.PrismaPromise<GetListJobSkillAggregateType<T>>

    /**
     * Group by ListJobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListJobSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListJobSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListJobSkillGroupByArgs['orderBy'] }
        : { orderBy?: ListJobSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListJobSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListJobSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListJobSkill model
   */
  readonly fields: ListJobSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListJobSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListJobSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ListJobSkill model
   */ 
  interface ListJobSkillFieldRefs {
    readonly id: FieldRef<"ListJobSkill", 'Int'>
    readonly job_id: FieldRef<"ListJobSkill", 'Int'>
    readonly skill_id: FieldRef<"ListJobSkill", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ListJobSkill findUnique
   */
  export type ListJobSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListJobSkill to fetch.
     */
    where: ListJobSkillWhereUniqueInput
  }


  /**
   * ListJobSkill findUniqueOrThrow
   */
  export type ListJobSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListJobSkill to fetch.
     */
    where: ListJobSkillWhereUniqueInput
  }


  /**
   * ListJobSkill findFirst
   */
  export type ListJobSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListJobSkill to fetch.
     */
    where?: ListJobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListJobSkills to fetch.
     */
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListJobSkills.
     */
    cursor?: ListJobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListJobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListJobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListJobSkills.
     */
    distinct?: ListJobSkillScalarFieldEnum | ListJobSkillScalarFieldEnum[]
  }


  /**
   * ListJobSkill findFirstOrThrow
   */
  export type ListJobSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListJobSkill to fetch.
     */
    where?: ListJobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListJobSkills to fetch.
     */
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListJobSkills.
     */
    cursor?: ListJobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListJobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListJobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListJobSkills.
     */
    distinct?: ListJobSkillScalarFieldEnum | ListJobSkillScalarFieldEnum[]
  }


  /**
   * ListJobSkill findMany
   */
  export type ListJobSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter, which ListJobSkills to fetch.
     */
    where?: ListJobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListJobSkills to fetch.
     */
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListJobSkills.
     */
    cursor?: ListJobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListJobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListJobSkills.
     */
    skip?: number
    distinct?: ListJobSkillScalarFieldEnum | ListJobSkillScalarFieldEnum[]
  }


  /**
   * ListJobSkill create
   */
  export type ListJobSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ListJobSkill.
     */
    data: XOR<ListJobSkillCreateInput, ListJobSkillUncheckedCreateInput>
  }


  /**
   * ListJobSkill createMany
   */
  export type ListJobSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListJobSkills.
     */
    data: ListJobSkillCreateManyInput | ListJobSkillCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ListJobSkill update
   */
  export type ListJobSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ListJobSkill.
     */
    data: XOR<ListJobSkillUpdateInput, ListJobSkillUncheckedUpdateInput>
    /**
     * Choose, which ListJobSkill to update.
     */
    where: ListJobSkillWhereUniqueInput
  }


  /**
   * ListJobSkill updateMany
   */
  export type ListJobSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListJobSkills.
     */
    data: XOR<ListJobSkillUpdateManyMutationInput, ListJobSkillUncheckedUpdateManyInput>
    /**
     * Filter which ListJobSkills to update
     */
    where?: ListJobSkillWhereInput
  }


  /**
   * ListJobSkill upsert
   */
  export type ListJobSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ListJobSkill to update in case it exists.
     */
    where: ListJobSkillWhereUniqueInput
    /**
     * In case the ListJobSkill found by the `where` argument doesn't exist, create a new ListJobSkill with this data.
     */
    create: XOR<ListJobSkillCreateInput, ListJobSkillUncheckedCreateInput>
    /**
     * In case the ListJobSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListJobSkillUpdateInput, ListJobSkillUncheckedUpdateInput>
  }


  /**
   * ListJobSkill delete
   */
  export type ListJobSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    /**
     * Filter which ListJobSkill to delete.
     */
    where: ListJobSkillWhereUniqueInput
  }


  /**
   * ListJobSkill deleteMany
   */
  export type ListJobSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListJobSkills to delete
     */
    where?: ListJobSkillWhereInput
  }


  /**
   * ListJobSkill without action
   */
  export type ListJobSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
  }



  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    estimate_salary: number | null
    ability_id: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    estimate_salary: number | null
    ability_id: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employment_type: string | null
    estimate_salary: number | null
    ability_id: number | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employment_type: string | null
    estimate_salary: number | null
    ability_id: number | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    company_id: number
    title: number
    description: number
    employment_type: number
    estimate_salary: number
    ability_id: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    company_id?: true
    estimate_salary?: true
    ability_id?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    company_id?: true
    estimate_salary?: true
    ability_id?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    estimate_salary?: true
    ability_id?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    estimate_salary?: true
    ability_id?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    estimate_salary?: true
    ability_id?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary: number | null
    ability_id: number | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    title?: boolean
    description?: boolean
    employment_type?: boolean
    estimate_salary?: boolean
    ability_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    ability?: boolean | Job$abilityArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    skills?: boolean | Job$skillsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    company_id?: boolean
    title?: boolean
    description?: boolean
    employment_type?: boolean
    estimate_salary?: boolean
    ability_id?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    ability?: boolean | Job$abilityArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    skills?: boolean | Job$skillsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      ability: Prisma.$AbilityPayload<ExtArgs> | null
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      skills: Prisma.$ListJobSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      title: string
      description: string
      employment_type: string
      estimate_salary: number | null
      ability_id: number | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }


  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends JobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends JobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends JobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ability<T extends Job$abilityArgs<ExtArgs> = {}>(args?: Subset<T, Job$abilityArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    skills<T extends Job$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Job$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListJobSkillPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly company_id: FieldRef<"Job", 'Int'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly employment_type: FieldRef<"Job", 'String'>
    readonly estimate_salary: FieldRef<"Job", 'Int'>
    readonly ability_id: FieldRef<"Job", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }


  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }


  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }


  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }


  /**
   * Job.ability
   */
  export type Job$abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbilityInclude<ExtArgs> | null
    where?: AbilityWhereInput
  }


  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }


  /**
   * Job.skills
   */
  export type Job$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListJobSkill
     */
    select?: ListJobSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListJobSkillInclude<ExtArgs> | null
    where?: ListJobSkillWhereInput
    orderBy?: ListJobSkillOrderByWithRelationInput | ListJobSkillOrderByWithRelationInput[]
    cursor?: ListJobSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListJobSkillScalarFieldEnum | ListJobSkillScalarFieldEnum[]
  }


  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    city: 'city',
    is_verified: 'is_verified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ListCertificateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    user_id: 'user_id'
  };

  export type ListCertificateScalarFieldEnum = (typeof ListCertificateScalarFieldEnum)[keyof typeof ListCertificateScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ListDisabilityScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    disability_id: 'disability_id'
  };

  export type ListDisabilityScalarFieldEnum = (typeof ListDisabilityScalarFieldEnum)[keyof typeof ListDisabilityScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_id: 'job_id',
    company_id: 'company_id',
    status: 'status'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const DisabilityScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description'
  };

  export type DisabilityScalarFieldEnum = (typeof DisabilityScalarFieldEnum)[keyof typeof DisabilityScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const ListSkillScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    skill_id: 'skill_id'
  };

  export type ListSkillScalarFieldEnum = (typeof ListSkillScalarFieldEnum)[keyof typeof ListSkillScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    about: 'about',
    logo: 'logo',
    picture: 'picture',
    email: 'email',
    password: 'password'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ListJobSkillScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    skill_id: 'skill_id'
  };

  export type ListJobSkillScalarFieldEnum = (typeof ListJobSkillScalarFieldEnum)[keyof typeof ListJobSkillScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    title: 'title',
    description: 'description',
    employment_type: 'employment_type',
    estimate_salary: 'estimate_salary',
    ability_id: 'ability_id'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    is_verified?: BoolFilter<"User"> | boolean
    certificates?: ListCertificateListRelationFilter
    disabilities?: ListDisabilityListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    skills?: ListSkillListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    certificates?: ListCertificateOrderByRelationAggregateInput
    disabilities?: ListDisabilityOrderByRelationAggregateInput
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    skills?: ListSkillOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    is_verified?: BoolFilter<"User"> | boolean
    certificates?: ListCertificateListRelationFilter
    disabilities?: ListDisabilityListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    skills?: ListSkillListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ListCertificateWhereInput = {
    AND?: ListCertificateWhereInput | ListCertificateWhereInput[]
    OR?: ListCertificateWhereInput[]
    NOT?: ListCertificateWhereInput | ListCertificateWhereInput[]
    id?: IntFilter<"ListCertificate"> | number
    name?: StringNullableFilter<"ListCertificate"> | string | null
    description?: StringNullableFilter<"ListCertificate"> | string | null
    user_id?: IntFilter<"ListCertificate"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ListCertificateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ListCertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListCertificateWhereInput | ListCertificateWhereInput[]
    OR?: ListCertificateWhereInput[]
    NOT?: ListCertificateWhereInput | ListCertificateWhereInput[]
    name?: StringNullableFilter<"ListCertificate"> | string | null
    description?: StringNullableFilter<"ListCertificate"> | string | null
    user_id?: IntFilter<"ListCertificate"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ListCertificateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: ListCertificateCountOrderByAggregateInput
    _avg?: ListCertificateAvgOrderByAggregateInput
    _max?: ListCertificateMaxOrderByAggregateInput
    _min?: ListCertificateMinOrderByAggregateInput
    _sum?: ListCertificateSumOrderByAggregateInput
  }

  export type ListCertificateScalarWhereWithAggregatesInput = {
    AND?: ListCertificateScalarWhereWithAggregatesInput | ListCertificateScalarWhereWithAggregatesInput[]
    OR?: ListCertificateScalarWhereWithAggregatesInput[]
    NOT?: ListCertificateScalarWhereWithAggregatesInput | ListCertificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListCertificate"> | number
    name?: StringNullableWithAggregatesFilter<"ListCertificate"> | string | null
    description?: StringNullableWithAggregatesFilter<"ListCertificate"> | string | null
    user_id?: IntWithAggregatesFilter<"ListCertificate"> | number
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    users?: ListSkillListRelationFilter
    jobs?: ListJobSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: ListSkillOrderByRelationAggregateInput
    jobs?: ListJobSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    users?: ListSkillListRelationFilter
    jobs?: ListJobSkillListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type ListDisabilityWhereInput = {
    AND?: ListDisabilityWhereInput | ListDisabilityWhereInput[]
    OR?: ListDisabilityWhereInput[]
    NOT?: ListDisabilityWhereInput | ListDisabilityWhereInput[]
    id?: IntFilter<"ListDisability"> | number
    user_id?: IntFilter<"ListDisability"> | number
    disability_id?: IntFilter<"ListDisability"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
  }

  export type ListDisabilityOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
    user?: UserOrderByWithRelationInput
    disability?: DisabilityOrderByWithRelationInput
  }

  export type ListDisabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListDisabilityWhereInput | ListDisabilityWhereInput[]
    OR?: ListDisabilityWhereInput[]
    NOT?: ListDisabilityWhereInput | ListDisabilityWhereInput[]
    user_id?: IntFilter<"ListDisability"> | number
    disability_id?: IntFilter<"ListDisability"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
  }, "id">

  export type ListDisabilityOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
    _count?: ListDisabilityCountOrderByAggregateInput
    _avg?: ListDisabilityAvgOrderByAggregateInput
    _max?: ListDisabilityMaxOrderByAggregateInput
    _min?: ListDisabilityMinOrderByAggregateInput
    _sum?: ListDisabilitySumOrderByAggregateInput
  }

  export type ListDisabilityScalarWhereWithAggregatesInput = {
    AND?: ListDisabilityScalarWhereWithAggregatesInput | ListDisabilityScalarWhereWithAggregatesInput[]
    OR?: ListDisabilityScalarWhereWithAggregatesInput[]
    NOT?: ListDisabilityScalarWhereWithAggregatesInput | ListDisabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListDisability"> | number
    user_id?: IntWithAggregatesFilter<"ListDisability"> | number
    disability_id?: IntWithAggregatesFilter<"ListDisability"> | number
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    user_id?: IntFilter<"JobApplication"> | number
    job_id?: IntFilter<"JobApplication"> | number
    company_id?: IntFilter<"JobApplication"> | number
    status?: StringFilter<"JobApplication"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    user_id?: IntFilter<"JobApplication"> | number
    job_id?: IntFilter<"JobApplication"> | number
    company_id?: IntFilter<"JobApplication"> | number
    status?: StringFilter<"JobApplication"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _avg?: JobApplicationAvgOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
    _sum?: JobApplicationSumOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobApplication"> | number
    user_id?: IntWithAggregatesFilter<"JobApplication"> | number
    job_id?: IntWithAggregatesFilter<"JobApplication"> | number
    company_id?: IntWithAggregatesFilter<"JobApplication"> | number
    status?: StringWithAggregatesFilter<"JobApplication"> | string
  }

  export type DisabilityWhereInput = {
    AND?: DisabilityWhereInput | DisabilityWhereInput[]
    OR?: DisabilityWhereInput[]
    NOT?: DisabilityWhereInput | DisabilityWhereInput[]
    id?: IntFilter<"Disability"> | number
    category_id?: IntFilter<"Disability"> | number
    name?: StringFilter<"Disability"> | string
    description?: StringFilter<"Disability"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    users?: ListDisabilityListRelationFilter
  }

  export type DisabilityOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: CategoryOrderByWithRelationInput
    users?: ListDisabilityOrderByRelationAggregateInput
  }

  export type DisabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisabilityWhereInput | DisabilityWhereInput[]
    OR?: DisabilityWhereInput[]
    NOT?: DisabilityWhereInput | DisabilityWhereInput[]
    category_id?: IntFilter<"Disability"> | number
    name?: StringFilter<"Disability"> | string
    description?: StringFilter<"Disability"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    users?: ListDisabilityListRelationFilter
  }, "id">

  export type DisabilityOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: DisabilityCountOrderByAggregateInput
    _avg?: DisabilityAvgOrderByAggregateInput
    _max?: DisabilityMaxOrderByAggregateInput
    _min?: DisabilityMinOrderByAggregateInput
    _sum?: DisabilitySumOrderByAggregateInput
  }

  export type DisabilityScalarWhereWithAggregatesInput = {
    AND?: DisabilityScalarWhereWithAggregatesInput | DisabilityScalarWhereWithAggregatesInput[]
    OR?: DisabilityScalarWhereWithAggregatesInput[]
    NOT?: DisabilityScalarWhereWithAggregatesInput | DisabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disability"> | number
    category_id?: IntWithAggregatesFilter<"Disability"> | number
    name?: StringWithAggregatesFilter<"Disability"> | string
    description?: StringWithAggregatesFilter<"Disability"> | string
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    id?: IntFilter<"Ability"> | number
    name?: StringFilter<"Ability"> | string
    jobs?: JobListRelationFilter
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    name?: StringFilter<"Ability"> | string
    jobs?: JobListRelationFilter
  }, "id">

  export type AbilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AbilityCountOrderByAggregateInput
    _avg?: AbilityAvgOrderByAggregateInput
    _max?: AbilityMaxOrderByAggregateInput
    _min?: AbilityMinOrderByAggregateInput
    _sum?: AbilitySumOrderByAggregateInput
  }

  export type AbilityScalarWhereWithAggregatesInput = {
    AND?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    OR?: AbilityScalarWhereWithAggregatesInput[]
    NOT?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ability"> | number
    name?: StringWithAggregatesFilter<"Ability"> | string
  }

  export type ListSkillWhereInput = {
    AND?: ListSkillWhereInput | ListSkillWhereInput[]
    OR?: ListSkillWhereInput[]
    NOT?: ListSkillWhereInput | ListSkillWhereInput[]
    id?: IntFilter<"ListSkill"> | number
    user_id?: IntFilter<"ListSkill"> | number
    skill_id?: IntFilter<"ListSkill"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type ListSkillOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ListSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListSkillWhereInput | ListSkillWhereInput[]
    OR?: ListSkillWhereInput[]
    NOT?: ListSkillWhereInput | ListSkillWhereInput[]
    user_id?: IntFilter<"ListSkill"> | number
    skill_id?: IntFilter<"ListSkill"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "id">

  export type ListSkillOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    _count?: ListSkillCountOrderByAggregateInput
    _avg?: ListSkillAvgOrderByAggregateInput
    _max?: ListSkillMaxOrderByAggregateInput
    _min?: ListSkillMinOrderByAggregateInput
    _sum?: ListSkillSumOrderByAggregateInput
  }

  export type ListSkillScalarWhereWithAggregatesInput = {
    AND?: ListSkillScalarWhereWithAggregatesInput | ListSkillScalarWhereWithAggregatesInput[]
    OR?: ListSkillScalarWhereWithAggregatesInput[]
    NOT?: ListSkillScalarWhereWithAggregatesInput | ListSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListSkill"> | number
    user_id?: IntWithAggregatesFilter<"ListSkill"> | number
    skill_id?: IntWithAggregatesFilter<"ListSkill"> | number
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    picture?: StringNullableFilter<"Company"> | string | null
    email?: StringFilter<"Company"> | string
    password?: StringFilter<"Company"> | string
    jobApplications?: JobApplicationListRelationFilter
    jobs?: JobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    picture?: StringNullableFilter<"Company"> | string | null
    email?: StringFilter<"Company"> | string
    password?: StringFilter<"Company"> | string
    jobApplications?: JobApplicationListRelationFilter
    jobs?: JobListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    city?: StringWithAggregatesFilter<"Company"> | string
    about?: StringWithAggregatesFilter<"Company"> | string
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Company"> | string | null
    email?: StringWithAggregatesFilter<"Company"> | string
    password?: StringWithAggregatesFilter<"Company"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    disabilities?: DisabilityListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    disabilities?: DisabilityOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    disabilities?: DisabilityListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ListJobSkillWhereInput = {
    AND?: ListJobSkillWhereInput | ListJobSkillWhereInput[]
    OR?: ListJobSkillWhereInput[]
    NOT?: ListJobSkillWhereInput | ListJobSkillWhereInput[]
    id?: IntFilter<"ListJobSkill"> | number
    job_id?: IntFilter<"ListJobSkill"> | number
    skill_id?: IntFilter<"ListJobSkill"> | number
    job?: XOR<JobRelationFilter, JobWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type ListJobSkillOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    job?: JobOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ListJobSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListJobSkillWhereInput | ListJobSkillWhereInput[]
    OR?: ListJobSkillWhereInput[]
    NOT?: ListJobSkillWhereInput | ListJobSkillWhereInput[]
    job_id?: IntFilter<"ListJobSkill"> | number
    skill_id?: IntFilter<"ListJobSkill"> | number
    job?: XOR<JobRelationFilter, JobWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "id">

  export type ListJobSkillOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    _count?: ListJobSkillCountOrderByAggregateInput
    _avg?: ListJobSkillAvgOrderByAggregateInput
    _max?: ListJobSkillMaxOrderByAggregateInput
    _min?: ListJobSkillMinOrderByAggregateInput
    _sum?: ListJobSkillSumOrderByAggregateInput
  }

  export type ListJobSkillScalarWhereWithAggregatesInput = {
    AND?: ListJobSkillScalarWhereWithAggregatesInput | ListJobSkillScalarWhereWithAggregatesInput[]
    OR?: ListJobSkillScalarWhereWithAggregatesInput[]
    NOT?: ListJobSkillScalarWhereWithAggregatesInput | ListJobSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListJobSkill"> | number
    job_id?: IntWithAggregatesFilter<"ListJobSkill"> | number
    skill_id?: IntWithAggregatesFilter<"ListJobSkill"> | number
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    company_id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    employment_type?: StringFilter<"Job"> | string
    estimate_salary?: IntNullableFilter<"Job"> | number | null
    ability_id?: IntNullableFilter<"Job"> | number | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
    applications?: JobApplicationListRelationFilter
    skills?: ListJobSkillListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    estimate_salary?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    ability?: AbilityOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
    skills?: ListJobSkillOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    company_id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    employment_type?: StringFilter<"Job"> | string
    estimate_salary?: IntNullableFilter<"Job"> | number | null
    ability_id?: IntNullableFilter<"Job"> | number | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
    applications?: JobApplicationListRelationFilter
    skills?: ListJobSkillListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    estimate_salary?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    company_id?: IntWithAggregatesFilter<"Job"> | number
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    employment_type?: StringWithAggregatesFilter<"Job"> | string
    estimate_salary?: IntNullableWithAggregatesFilter<"Job"> | number | null
    ability_id?: IntNullableWithAggregatesFilter<"Job"> | number | null
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
    skills?: ListSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateUncheckedCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityUncheckedCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    skills?: ListSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
    skills?: ListSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUncheckedUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUncheckedUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    skills?: ListSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListCertificateCreateInput = {
    name?: string | null
    description?: string | null
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type ListCertificateUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    user_id: number
  }

  export type ListCertificateUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type ListCertificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListCertificateCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    user_id: number
  }

  export type ListCertificateUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListCertificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type SkillCreateInput = {
    name: string
    users?: ListSkillCreateNestedManyWithoutSkillInput
    jobs?: ListJobSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    users?: ListSkillUncheckedCreateNestedManyWithoutSkillInput
    jobs?: ListJobSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: ListSkillUpdateManyWithoutSkillNestedInput
    jobs?: ListJobSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: ListSkillUncheckedUpdateManyWithoutSkillNestedInput
    jobs?: ListJobSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListDisabilityCreateInput = {
    user: UserCreateNestedOneWithoutDisabilitiesInput
    disability: DisabilityCreateNestedOneWithoutUsersInput
  }

  export type ListDisabilityUncheckedCreateInput = {
    id?: number
    user_id: number
    disability_id: number
  }

  export type ListDisabilityUpdateInput = {
    user?: UserUpdateOneRequiredWithoutDisabilitiesNestedInput
    disability?: DisabilityUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ListDisabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListDisabilityCreateManyInput = {
    id?: number
    user_id: number
    disability_id: number
  }

  export type ListDisabilityUpdateManyMutationInput = {

  }

  export type ListDisabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobApplicationCreateInput = {
    status: string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
    company: CompanyCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: number
    user_id: number
    job_id: number
    company_id: number
    status: string
  }

  export type JobApplicationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationCreateManyInput = {
    id?: number
    user_id: number
    job_id: number
    company_id: number
    status: string
  }

  export type JobApplicationUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DisabilityCreateInput = {
    name: string
    description: string
    category: CategoryCreateNestedOneWithoutDisabilitiesInput
    users?: ListDisabilityCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUncheckedCreateInput = {
    id?: number
    category_id: number
    name: string
    description: string
    users?: ListDisabilityUncheckedCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput
    users?: ListDisabilityUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: ListDisabilityUncheckedUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityCreateManyInput = {
    id?: number
    category_id: number
    name: string
    description: string
  }

  export type DisabilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DisabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityCreateInput = {
    name: string
    jobs?: JobCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateInput = {
    id?: number
    name: string
    jobs?: JobUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    jobs?: JobUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    jobs?: JobUncheckedUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityCreateManyInput = {
    id?: number
    name: string
  }

  export type AbilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListSkillCreateInput = {
    user: UserCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type ListSkillUncheckedCreateInput = {
    id?: number
    user_id: number
    skill_id: number
  }

  export type ListSkillUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ListSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListSkillCreateManyInput = {
    id?: number
    user_id: number
    skill_id: number
  }

  export type ListSkillUpdateManyMutationInput = {

  }

  export type ListSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyCreateInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobApplications?: JobApplicationCreateNestedManyWithoutCompanyInput
    jobs?: JobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutCompanyInput
    jobs?: JobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobApplications?: JobApplicationUpdateManyWithoutCompanyNestedInput
    jobs?: JobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutCompanyNestedInput
    jobs?: JobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    disabilities?: DisabilityCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    disabilities?: DisabilityUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    disabilities?: DisabilityUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    disabilities?: DisabilityUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListJobSkillCreateInput = {
    job: JobCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutJobsInput
  }

  export type ListJobSkillUncheckedCreateInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type ListJobSkillUpdateInput = {
    job?: JobUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutJobsNestedInput
  }

  export type ListJobSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListJobSkillCreateManyInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type ListJobSkillUpdateManyMutationInput = {

  }

  export type ListJobSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobCreateInput = {
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    skills?: ListJobSkillCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    skills?: ListJobSkillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListCertificateListRelationFilter = {
    every?: ListCertificateWhereInput
    some?: ListCertificateWhereInput
    none?: ListCertificateWhereInput
  }

  export type ListDisabilityListRelationFilter = {
    every?: ListDisabilityWhereInput
    some?: ListDisabilityWhereInput
    none?: ListDisabilityWhereInput
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type ListSkillListRelationFilter = {
    every?: ListSkillWhereInput
    some?: ListSkillWhereInput
    none?: ListSkillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListCertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListDisabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    is_verified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    is_verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    is_verified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListCertificateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type ListCertificateAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ListCertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type ListCertificateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type ListCertificateSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ListJobSkillListRelationFilter = {
    every?: ListJobSkillWhereInput
    some?: ListJobSkillWhereInput
    none?: ListJobSkillWhereInput
  }

  export type ListJobSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisabilityRelationFilter = {
    is?: DisabilityWhereInput
    isNot?: DisabilityWhereInput
  }

  export type ListDisabilityCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
  }

  export type ListDisabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
  }

  export type ListDisabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
  }

  export type ListDisabilityMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
  }

  export type ListDisabilitySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    disability_id?: SortOrder
  }

  export type JobRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type DisabilityCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DisabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type DisabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DisabilityMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DisabilitySumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AbilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AbilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AbilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AbilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ListSkillCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListSkillMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListSkillSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisabilityListRelationFilter = {
    every?: DisabilityWhereInput
    some?: DisabilityWhereInput
    none?: DisabilityWhereInput
  }

  export type DisabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListJobSkillCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListJobSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListJobSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListJobSkillMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type ListJobSkillSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AbilityNullableRelationFilter = {
    is?: AbilityWhereInput | null
    isNot?: AbilityWhereInput | null
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    estimate_salary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    estimate_salary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    estimate_salary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    estimate_salary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    estimate_salary?: SortOrder
    ability_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ListCertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput> | ListCertificateCreateWithoutUserInput[] | ListCertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCertificateCreateOrConnectWithoutUserInput | ListCertificateCreateOrConnectWithoutUserInput[]
    createMany?: ListCertificateCreateManyUserInputEnvelope
    connect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
  }

  export type ListDisabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput> | ListDisabilityCreateWithoutUserInput[] | ListDisabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutUserInput | ListDisabilityCreateOrConnectWithoutUserInput[]
    createMany?: ListDisabilityCreateManyUserInputEnvelope
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
  }

  export type JobApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ListSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput> | ListSkillCreateWithoutUserInput[] | ListSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutUserInput | ListSkillCreateOrConnectWithoutUserInput[]
    createMany?: ListSkillCreateManyUserInputEnvelope
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
  }

  export type ListCertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput> | ListCertificateCreateWithoutUserInput[] | ListCertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCertificateCreateOrConnectWithoutUserInput | ListCertificateCreateOrConnectWithoutUserInput[]
    createMany?: ListCertificateCreateManyUserInputEnvelope
    connect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
  }

  export type ListDisabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput> | ListDisabilityCreateWithoutUserInput[] | ListDisabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutUserInput | ListDisabilityCreateOrConnectWithoutUserInput[]
    createMany?: ListDisabilityCreateManyUserInputEnvelope
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ListSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput> | ListSkillCreateWithoutUserInput[] | ListSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutUserInput | ListSkillCreateOrConnectWithoutUserInput[]
    createMany?: ListSkillCreateManyUserInputEnvelope
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ListCertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput> | ListCertificateCreateWithoutUserInput[] | ListCertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCertificateCreateOrConnectWithoutUserInput | ListCertificateCreateOrConnectWithoutUserInput[]
    upsert?: ListCertificateUpsertWithWhereUniqueWithoutUserInput | ListCertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCertificateCreateManyUserInputEnvelope
    set?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    disconnect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    delete?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    connect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    update?: ListCertificateUpdateWithWhereUniqueWithoutUserInput | ListCertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListCertificateUpdateManyWithWhereWithoutUserInput | ListCertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListCertificateScalarWhereInput | ListCertificateScalarWhereInput[]
  }

  export type ListDisabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput> | ListDisabilityCreateWithoutUserInput[] | ListDisabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutUserInput | ListDisabilityCreateOrConnectWithoutUserInput[]
    upsert?: ListDisabilityUpsertWithWhereUniqueWithoutUserInput | ListDisabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListDisabilityCreateManyUserInputEnvelope
    set?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    disconnect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    delete?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    update?: ListDisabilityUpdateWithWhereUniqueWithoutUserInput | ListDisabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListDisabilityUpdateManyWithWhereWithoutUserInput | ListDisabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
  }

  export type JobApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ListSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput> | ListSkillCreateWithoutUserInput[] | ListSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutUserInput | ListSkillCreateOrConnectWithoutUserInput[]
    upsert?: ListSkillUpsertWithWhereUniqueWithoutUserInput | ListSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListSkillCreateManyUserInputEnvelope
    set?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    disconnect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    delete?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    update?: ListSkillUpdateWithWhereUniqueWithoutUserInput | ListSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListSkillUpdateManyWithWhereWithoutUserInput | ListSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListCertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput> | ListCertificateCreateWithoutUserInput[] | ListCertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListCertificateCreateOrConnectWithoutUserInput | ListCertificateCreateOrConnectWithoutUserInput[]
    upsert?: ListCertificateUpsertWithWhereUniqueWithoutUserInput | ListCertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListCertificateCreateManyUserInputEnvelope
    set?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    disconnect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    delete?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    connect?: ListCertificateWhereUniqueInput | ListCertificateWhereUniqueInput[]
    update?: ListCertificateUpdateWithWhereUniqueWithoutUserInput | ListCertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListCertificateUpdateManyWithWhereWithoutUserInput | ListCertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListCertificateScalarWhereInput | ListCertificateScalarWhereInput[]
  }

  export type ListDisabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput> | ListDisabilityCreateWithoutUserInput[] | ListDisabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutUserInput | ListDisabilityCreateOrConnectWithoutUserInput[]
    upsert?: ListDisabilityUpsertWithWhereUniqueWithoutUserInput | ListDisabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListDisabilityCreateManyUserInputEnvelope
    set?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    disconnect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    delete?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    update?: ListDisabilityUpdateWithWhereUniqueWithoutUserInput | ListDisabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListDisabilityUpdateManyWithWhereWithoutUserInput | ListDisabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ListSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput> | ListSkillCreateWithoutUserInput[] | ListSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutUserInput | ListSkillCreateOrConnectWithoutUserInput[]
    upsert?: ListSkillUpsertWithWhereUniqueWithoutUserInput | ListSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListSkillCreateManyUserInputEnvelope
    set?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    disconnect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    delete?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    update?: ListSkillUpdateWithWhereUniqueWithoutUserInput | ListSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListSkillUpdateManyWithWhereWithoutUserInput | ListSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type ListSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput> | ListSkillCreateWithoutSkillInput[] | ListSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutSkillInput | ListSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ListSkillCreateManySkillInputEnvelope
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
  }

  export type ListJobSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput> | ListJobSkillCreateWithoutSkillInput[] | ListJobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutSkillInput | ListJobSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ListJobSkillCreateManySkillInputEnvelope
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
  }

  export type ListSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput> | ListSkillCreateWithoutSkillInput[] | ListSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutSkillInput | ListSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ListSkillCreateManySkillInputEnvelope
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
  }

  export type ListJobSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput> | ListJobSkillCreateWithoutSkillInput[] | ListJobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutSkillInput | ListJobSkillCreateOrConnectWithoutSkillInput[]
    createMany?: ListJobSkillCreateManySkillInputEnvelope
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
  }

  export type ListSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput> | ListSkillCreateWithoutSkillInput[] | ListSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutSkillInput | ListSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ListSkillUpsertWithWhereUniqueWithoutSkillInput | ListSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ListSkillCreateManySkillInputEnvelope
    set?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    disconnect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    delete?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    update?: ListSkillUpdateWithWhereUniqueWithoutSkillInput | ListSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ListSkillUpdateManyWithWhereWithoutSkillInput | ListSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
  }

  export type ListJobSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput> | ListJobSkillCreateWithoutSkillInput[] | ListJobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutSkillInput | ListJobSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ListJobSkillUpsertWithWhereUniqueWithoutSkillInput | ListJobSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ListJobSkillCreateManySkillInputEnvelope
    set?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    disconnect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    delete?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    update?: ListJobSkillUpdateWithWhereUniqueWithoutSkillInput | ListJobSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ListJobSkillUpdateManyWithWhereWithoutSkillInput | ListJobSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
  }

  export type ListSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput> | ListSkillCreateWithoutSkillInput[] | ListSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListSkillCreateOrConnectWithoutSkillInput | ListSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ListSkillUpsertWithWhereUniqueWithoutSkillInput | ListSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ListSkillCreateManySkillInputEnvelope
    set?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    disconnect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    delete?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    connect?: ListSkillWhereUniqueInput | ListSkillWhereUniqueInput[]
    update?: ListSkillUpdateWithWhereUniqueWithoutSkillInput | ListSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ListSkillUpdateManyWithWhereWithoutSkillInput | ListSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
  }

  export type ListJobSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput> | ListJobSkillCreateWithoutSkillInput[] | ListJobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutSkillInput | ListJobSkillCreateOrConnectWithoutSkillInput[]
    upsert?: ListJobSkillUpsertWithWhereUniqueWithoutSkillInput | ListJobSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ListJobSkillCreateManySkillInputEnvelope
    set?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    disconnect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    delete?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    update?: ListJobSkillUpdateWithWhereUniqueWithoutSkillInput | ListJobSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ListJobSkillUpdateManyWithWhereWithoutSkillInput | ListJobSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDisabilitiesInput = {
    create?: XOR<UserCreateWithoutDisabilitiesInput, UserUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisabilitiesInput
    connect?: UserWhereUniqueInput
  }

  export type DisabilityCreateNestedOneWithoutUsersInput = {
    create?: XOR<DisabilityCreateWithoutUsersInput, DisabilityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutUsersInput
    connect?: DisabilityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDisabilitiesNestedInput = {
    create?: XOR<UserCreateWithoutDisabilitiesInput, UserUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisabilitiesInput
    upsert?: UserUpsertWithoutDisabilitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisabilitiesInput, UserUpdateWithoutDisabilitiesInput>, UserUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type DisabilityUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DisabilityCreateWithoutUsersInput, DisabilityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutUsersInput
    upsert?: DisabilityUpsertWithoutUsersInput
    connect?: DisabilityWhereUniqueInput
    update?: XOR<XOR<DisabilityUpdateToOneWithWhereWithoutUsersInput, DisabilityUpdateWithoutUsersInput>, DisabilityUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<CompanyCreateWithoutJobApplicationsInput, CompanyUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobApplicationsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    upsert?: UserUpsertWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobApplicationsInput, UserUpdateWithoutJobApplicationsInput>, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type CompanyUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<CompanyCreateWithoutJobApplicationsInput, CompanyUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobApplicationsInput
    upsert?: CompanyUpsertWithoutJobApplicationsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobApplicationsInput, CompanyUpdateWithoutJobApplicationsInput>, CompanyUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type CategoryCreateNestedOneWithoutDisabilitiesInput = {
    create?: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDisabilitiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ListDisabilityCreateNestedManyWithoutDisabilityInput = {
    create?: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput> | ListDisabilityCreateWithoutDisabilityInput[] | ListDisabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutDisabilityInput | ListDisabilityCreateOrConnectWithoutDisabilityInput[]
    createMany?: ListDisabilityCreateManyDisabilityInputEnvelope
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
  }

  export type ListDisabilityUncheckedCreateNestedManyWithoutDisabilityInput = {
    create?: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput> | ListDisabilityCreateWithoutDisabilityInput[] | ListDisabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutDisabilityInput | ListDisabilityCreateOrConnectWithoutDisabilityInput[]
    createMany?: ListDisabilityCreateManyDisabilityInputEnvelope
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput = {
    create?: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDisabilitiesInput
    upsert?: CategoryUpsertWithoutDisabilitiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDisabilitiesInput, CategoryUpdateWithoutDisabilitiesInput>, CategoryUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type ListDisabilityUpdateManyWithoutDisabilityNestedInput = {
    create?: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput> | ListDisabilityCreateWithoutDisabilityInput[] | ListDisabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutDisabilityInput | ListDisabilityCreateOrConnectWithoutDisabilityInput[]
    upsert?: ListDisabilityUpsertWithWhereUniqueWithoutDisabilityInput | ListDisabilityUpsertWithWhereUniqueWithoutDisabilityInput[]
    createMany?: ListDisabilityCreateManyDisabilityInputEnvelope
    set?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    disconnect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    delete?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    update?: ListDisabilityUpdateWithWhereUniqueWithoutDisabilityInput | ListDisabilityUpdateWithWhereUniqueWithoutDisabilityInput[]
    updateMany?: ListDisabilityUpdateManyWithWhereWithoutDisabilityInput | ListDisabilityUpdateManyWithWhereWithoutDisabilityInput[]
    deleteMany?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
  }

  export type ListDisabilityUncheckedUpdateManyWithoutDisabilityNestedInput = {
    create?: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput> | ListDisabilityCreateWithoutDisabilityInput[] | ListDisabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: ListDisabilityCreateOrConnectWithoutDisabilityInput | ListDisabilityCreateOrConnectWithoutDisabilityInput[]
    upsert?: ListDisabilityUpsertWithWhereUniqueWithoutDisabilityInput | ListDisabilityUpsertWithWhereUniqueWithoutDisabilityInput[]
    createMany?: ListDisabilityCreateManyDisabilityInputEnvelope
    set?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    disconnect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    delete?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    connect?: ListDisabilityWhereUniqueInput | ListDisabilityWhereUniqueInput[]
    update?: ListDisabilityUpdateWithWhereUniqueWithoutDisabilityInput | ListDisabilityUpdateWithWhereUniqueWithoutDisabilityInput[]
    updateMany?: ListDisabilityUpdateManyWithWhereWithoutDisabilityInput | ListDisabilityUpdateManyWithWhereWithoutDisabilityInput[]
    deleteMany?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
  }

  export type JobCreateNestedManyWithoutAbilityInput = {
    create?: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput> | JobCreateWithoutAbilityInput[] | JobUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobCreateOrConnectWithoutAbilityInput | JobCreateOrConnectWithoutAbilityInput[]
    createMany?: JobCreateManyAbilityInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput> | JobCreateWithoutAbilityInput[] | JobUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobCreateOrConnectWithoutAbilityInput | JobCreateOrConnectWithoutAbilityInput[]
    createMany?: JobCreateManyAbilityInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput> | JobCreateWithoutAbilityInput[] | JobUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobCreateOrConnectWithoutAbilityInput | JobCreateOrConnectWithoutAbilityInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutAbilityInput | JobUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: JobCreateManyAbilityInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutAbilityInput | JobUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: JobUpdateManyWithWhereWithoutAbilityInput | JobUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput> | JobCreateWithoutAbilityInput[] | JobUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobCreateOrConnectWithoutAbilityInput | JobCreateOrConnectWithoutAbilityInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutAbilityInput | JobUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: JobCreateManyAbilityInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutAbilityInput | JobUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: JobUpdateManyWithWhereWithoutAbilityInput | JobUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type JobApplicationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput> | JobApplicationCreateWithoutCompanyInput[] | JobApplicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutCompanyInput | JobApplicationCreateOrConnectWithoutCompanyInput[]
    createMany?: JobApplicationCreateManyCompanyInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput> | JobApplicationCreateWithoutCompanyInput[] | JobApplicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutCompanyInput | JobApplicationCreateOrConnectWithoutCompanyInput[]
    createMany?: JobApplicationCreateManyCompanyInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobApplicationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput> | JobApplicationCreateWithoutCompanyInput[] | JobApplicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutCompanyInput | JobApplicationCreateOrConnectWithoutCompanyInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutCompanyInput | JobApplicationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobApplicationCreateManyCompanyInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutCompanyInput | JobApplicationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutCompanyInput | JobApplicationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyInput | JobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyInput | JobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyInput | JobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput> | JobApplicationCreateWithoutCompanyInput[] | JobApplicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutCompanyInput | JobApplicationCreateOrConnectWithoutCompanyInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutCompanyInput | JobApplicationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobApplicationCreateManyCompanyInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutCompanyInput | JobApplicationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutCompanyInput | JobApplicationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput> | JobCreateWithoutCompanyInput[] | JobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyInput | JobCreateOrConnectWithoutCompanyInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyInput | JobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobCreateManyCompanyInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyInput | JobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyInput | JobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type DisabilityCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput> | DisabilityCreateWithoutCategoryInput[] | DisabilityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DisabilityCreateOrConnectWithoutCategoryInput | DisabilityCreateOrConnectWithoutCategoryInput[]
    createMany?: DisabilityCreateManyCategoryInputEnvelope
    connect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
  }

  export type DisabilityUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput> | DisabilityCreateWithoutCategoryInput[] | DisabilityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DisabilityCreateOrConnectWithoutCategoryInput | DisabilityCreateOrConnectWithoutCategoryInput[]
    createMany?: DisabilityCreateManyCategoryInputEnvelope
    connect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
  }

  export type DisabilityUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput> | DisabilityCreateWithoutCategoryInput[] | DisabilityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DisabilityCreateOrConnectWithoutCategoryInput | DisabilityCreateOrConnectWithoutCategoryInput[]
    upsert?: DisabilityUpsertWithWhereUniqueWithoutCategoryInput | DisabilityUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DisabilityCreateManyCategoryInputEnvelope
    set?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    disconnect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    delete?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    connect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    update?: DisabilityUpdateWithWhereUniqueWithoutCategoryInput | DisabilityUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DisabilityUpdateManyWithWhereWithoutCategoryInput | DisabilityUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DisabilityScalarWhereInput | DisabilityScalarWhereInput[]
  }

  export type DisabilityUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput> | DisabilityCreateWithoutCategoryInput[] | DisabilityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DisabilityCreateOrConnectWithoutCategoryInput | DisabilityCreateOrConnectWithoutCategoryInput[]
    upsert?: DisabilityUpsertWithWhereUniqueWithoutCategoryInput | DisabilityUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DisabilityCreateManyCategoryInputEnvelope
    set?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    disconnect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    delete?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    connect?: DisabilityWhereUniqueInput | DisabilityWhereUniqueInput[]
    update?: DisabilityUpdateWithWhereUniqueWithoutCategoryInput | DisabilityUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DisabilityUpdateManyWithWhereWithoutCategoryInput | DisabilityUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DisabilityScalarWhereInput | DisabilityScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutSkillsInput = {
    create?: XOR<JobCreateWithoutSkillsInput, JobUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSkillsInput
    connect?: JobWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutJobsInput = {
    create?: XOR<SkillCreateWithoutJobsInput, SkillUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutJobsInput
    connect?: SkillWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<JobCreateWithoutSkillsInput, JobUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSkillsInput
    upsert?: JobUpsertWithoutSkillsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutSkillsInput, JobUpdateWithoutSkillsInput>, JobUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<SkillCreateWithoutJobsInput, SkillUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutJobsInput
    upsert?: SkillUpsertWithoutJobsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutJobsInput, SkillUpdateWithoutJobsInput>, SkillUncheckedUpdateWithoutJobsInput>
  }

  export type CompanyCreateNestedOneWithoutJobsInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type AbilityCreateNestedOneWithoutJobsInput = {
    create?: XOR<AbilityCreateWithoutJobsInput, AbilityUncheckedCreateWithoutJobsInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutJobsInput
    connect?: AbilityWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ListJobSkillCreateNestedManyWithoutJobInput = {
    create?: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput> | ListJobSkillCreateWithoutJobInput[] | ListJobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutJobInput | ListJobSkillCreateOrConnectWithoutJobInput[]
    createMany?: ListJobSkillCreateManyJobInputEnvelope
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ListJobSkillUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput> | ListJobSkillCreateWithoutJobInput[] | ListJobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutJobInput | ListJobSkillCreateOrConnectWithoutJobInput[]
    createMany?: ListJobSkillCreateManyJobInputEnvelope
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    upsert?: CompanyUpsertWithoutJobsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobsInput, CompanyUpdateWithoutJobsInput>, CompanyUncheckedUpdateWithoutJobsInput>
  }

  export type AbilityUpdateOneWithoutJobsNestedInput = {
    create?: XOR<AbilityCreateWithoutJobsInput, AbilityUncheckedCreateWithoutJobsInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutJobsInput
    upsert?: AbilityUpsertWithoutJobsInput
    disconnect?: AbilityWhereInput | boolean
    delete?: AbilityWhereInput | boolean
    connect?: AbilityWhereUniqueInput
    update?: XOR<XOR<AbilityUpdateToOneWithWhereWithoutJobsInput, AbilityUpdateWithoutJobsInput>, AbilityUncheckedUpdateWithoutJobsInput>
  }

  export type JobApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ListJobSkillUpdateManyWithoutJobNestedInput = {
    create?: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput> | ListJobSkillCreateWithoutJobInput[] | ListJobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutJobInput | ListJobSkillCreateOrConnectWithoutJobInput[]
    upsert?: ListJobSkillUpsertWithWhereUniqueWithoutJobInput | ListJobSkillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ListJobSkillCreateManyJobInputEnvelope
    set?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    disconnect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    delete?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    update?: ListJobSkillUpdateWithWhereUniqueWithoutJobInput | ListJobSkillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ListJobSkillUpdateManyWithWhereWithoutJobInput | ListJobSkillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ListJobSkillUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput> | ListJobSkillCreateWithoutJobInput[] | ListJobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ListJobSkillCreateOrConnectWithoutJobInput | ListJobSkillCreateOrConnectWithoutJobInput[]
    upsert?: ListJobSkillUpsertWithWhereUniqueWithoutJobInput | ListJobSkillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ListJobSkillCreateManyJobInputEnvelope
    set?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    disconnect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    delete?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    connect?: ListJobSkillWhereUniqueInput | ListJobSkillWhereUniqueInput[]
    update?: ListJobSkillUpdateWithWhereUniqueWithoutJobInput | ListJobSkillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ListJobSkillUpdateManyWithWhereWithoutJobInput | ListJobSkillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ListCertificateCreateWithoutUserInput = {
    name?: string | null
    description?: string | null
  }

  export type ListCertificateUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    description?: string | null
  }

  export type ListCertificateCreateOrConnectWithoutUserInput = {
    where: ListCertificateWhereUniqueInput
    create: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput>
  }

  export type ListCertificateCreateManyUserInputEnvelope = {
    data: ListCertificateCreateManyUserInput | ListCertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListDisabilityCreateWithoutUserInput = {
    disability: DisabilityCreateNestedOneWithoutUsersInput
  }

  export type ListDisabilityUncheckedCreateWithoutUserInput = {
    id?: number
    disability_id: number
  }

  export type ListDisabilityCreateOrConnectWithoutUserInput = {
    where: ListDisabilityWhereUniqueInput
    create: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput>
  }

  export type ListDisabilityCreateManyUserInputEnvelope = {
    data: ListDisabilityCreateManyUserInput | ListDisabilityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationCreateWithoutUserInput = {
    status: string
    job: JobCreateNestedOneWithoutApplicationsInput
    company: CompanyCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutUserInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
  }

  export type JobApplicationCreateOrConnectWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationCreateManyUserInputEnvelope = {
    data: JobApplicationCreateManyUserInput | JobApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListSkillCreateWithoutUserInput = {
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type ListSkillUncheckedCreateWithoutUserInput = {
    id?: number
    skill_id: number
  }

  export type ListSkillCreateOrConnectWithoutUserInput = {
    where: ListSkillWhereUniqueInput
    create: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput>
  }

  export type ListSkillCreateManyUserInputEnvelope = {
    data: ListSkillCreateManyUserInput | ListSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListCertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: ListCertificateWhereUniqueInput
    update: XOR<ListCertificateUpdateWithoutUserInput, ListCertificateUncheckedUpdateWithoutUserInput>
    create: XOR<ListCertificateCreateWithoutUserInput, ListCertificateUncheckedCreateWithoutUserInput>
  }

  export type ListCertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: ListCertificateWhereUniqueInput
    data: XOR<ListCertificateUpdateWithoutUserInput, ListCertificateUncheckedUpdateWithoutUserInput>
  }

  export type ListCertificateUpdateManyWithWhereWithoutUserInput = {
    where: ListCertificateScalarWhereInput
    data: XOR<ListCertificateUpdateManyMutationInput, ListCertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type ListCertificateScalarWhereInput = {
    AND?: ListCertificateScalarWhereInput | ListCertificateScalarWhereInput[]
    OR?: ListCertificateScalarWhereInput[]
    NOT?: ListCertificateScalarWhereInput | ListCertificateScalarWhereInput[]
    id?: IntFilter<"ListCertificate"> | number
    name?: StringNullableFilter<"ListCertificate"> | string | null
    description?: StringNullableFilter<"ListCertificate"> | string | null
    user_id?: IntFilter<"ListCertificate"> | number
  }

  export type ListDisabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: ListDisabilityWhereUniqueInput
    update: XOR<ListDisabilityUpdateWithoutUserInput, ListDisabilityUncheckedUpdateWithoutUserInput>
    create: XOR<ListDisabilityCreateWithoutUserInput, ListDisabilityUncheckedCreateWithoutUserInput>
  }

  export type ListDisabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: ListDisabilityWhereUniqueInput
    data: XOR<ListDisabilityUpdateWithoutUserInput, ListDisabilityUncheckedUpdateWithoutUserInput>
  }

  export type ListDisabilityUpdateManyWithWhereWithoutUserInput = {
    where: ListDisabilityScalarWhereInput
    data: XOR<ListDisabilityUpdateManyMutationInput, ListDisabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type ListDisabilityScalarWhereInput = {
    AND?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
    OR?: ListDisabilityScalarWhereInput[]
    NOT?: ListDisabilityScalarWhereInput | ListDisabilityScalarWhereInput[]
    id?: IntFilter<"ListDisability"> | number
    user_id?: IntFilter<"ListDisability"> | number
    disability_id?: IntFilter<"ListDisability"> | number
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutUserInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    user_id?: IntFilter<"JobApplication"> | number
    job_id?: IntFilter<"JobApplication"> | number
    company_id?: IntFilter<"JobApplication"> | number
    status?: StringFilter<"JobApplication"> | string
  }

  export type ListSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: ListSkillWhereUniqueInput
    update: XOR<ListSkillUpdateWithoutUserInput, ListSkillUncheckedUpdateWithoutUserInput>
    create: XOR<ListSkillCreateWithoutUserInput, ListSkillUncheckedCreateWithoutUserInput>
  }

  export type ListSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: ListSkillWhereUniqueInput
    data: XOR<ListSkillUpdateWithoutUserInput, ListSkillUncheckedUpdateWithoutUserInput>
  }

  export type ListSkillUpdateManyWithWhereWithoutUserInput = {
    where: ListSkillScalarWhereInput
    data: XOR<ListSkillUpdateManyMutationInput, ListSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type ListSkillScalarWhereInput = {
    AND?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
    OR?: ListSkillScalarWhereInput[]
    NOT?: ListSkillScalarWhereInput | ListSkillScalarWhereInput[]
    id?: IntFilter<"ListSkill"> | number
    user_id?: IntFilter<"ListSkill"> | number
    skill_id?: IntFilter<"ListSkill"> | number
  }

  export type UserCreateWithoutCertificatesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    disabilities?: ListDisabilityCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
    skills?: ListSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    disabilities?: ListDisabilityUncheckedCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    skills?: ListSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    disabilities?: ListDisabilityUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
    skills?: ListSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    disabilities?: ListDisabilityUncheckedUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    skills?: ListSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListSkillCreateWithoutSkillInput = {
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type ListSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    user_id: number
  }

  export type ListSkillCreateOrConnectWithoutSkillInput = {
    where: ListSkillWhereUniqueInput
    create: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput>
  }

  export type ListSkillCreateManySkillInputEnvelope = {
    data: ListSkillCreateManySkillInput | ListSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ListJobSkillCreateWithoutSkillInput = {
    job: JobCreateNestedOneWithoutSkillsInput
  }

  export type ListJobSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    job_id: number
  }

  export type ListJobSkillCreateOrConnectWithoutSkillInput = {
    where: ListJobSkillWhereUniqueInput
    create: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput>
  }

  export type ListJobSkillCreateManySkillInputEnvelope = {
    data: ListJobSkillCreateManySkillInput | ListJobSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ListSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: ListSkillWhereUniqueInput
    update: XOR<ListSkillUpdateWithoutSkillInput, ListSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<ListSkillCreateWithoutSkillInput, ListSkillUncheckedCreateWithoutSkillInput>
  }

  export type ListSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: ListSkillWhereUniqueInput
    data: XOR<ListSkillUpdateWithoutSkillInput, ListSkillUncheckedUpdateWithoutSkillInput>
  }

  export type ListSkillUpdateManyWithWhereWithoutSkillInput = {
    where: ListSkillScalarWhereInput
    data: XOR<ListSkillUpdateManyMutationInput, ListSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ListJobSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: ListJobSkillWhereUniqueInput
    update: XOR<ListJobSkillUpdateWithoutSkillInput, ListJobSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<ListJobSkillCreateWithoutSkillInput, ListJobSkillUncheckedCreateWithoutSkillInput>
  }

  export type ListJobSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: ListJobSkillWhereUniqueInput
    data: XOR<ListJobSkillUpdateWithoutSkillInput, ListJobSkillUncheckedUpdateWithoutSkillInput>
  }

  export type ListJobSkillUpdateManyWithWhereWithoutSkillInput = {
    where: ListJobSkillScalarWhereInput
    data: XOR<ListJobSkillUpdateManyMutationInput, ListJobSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ListJobSkillScalarWhereInput = {
    AND?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
    OR?: ListJobSkillScalarWhereInput[]
    NOT?: ListJobSkillScalarWhereInput | ListJobSkillScalarWhereInput[]
    id?: IntFilter<"ListJobSkill"> | number
    job_id?: IntFilter<"ListJobSkill"> | number
    skill_id?: IntFilter<"ListJobSkill"> | number
  }

  export type UserCreateWithoutDisabilitiesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
    skills?: ListSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDisabilitiesInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateUncheckedCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    skills?: ListSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDisabilitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisabilitiesInput, UserUncheckedCreateWithoutDisabilitiesInput>
  }

  export type DisabilityCreateWithoutUsersInput = {
    name: string
    description: string
    category: CategoryCreateNestedOneWithoutDisabilitiesInput
  }

  export type DisabilityUncheckedCreateWithoutUsersInput = {
    id?: number
    category_id: number
    name: string
    description: string
  }

  export type DisabilityCreateOrConnectWithoutUsersInput = {
    where: DisabilityWhereUniqueInput
    create: XOR<DisabilityCreateWithoutUsersInput, DisabilityUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutDisabilitiesInput = {
    update: XOR<UserUpdateWithoutDisabilitiesInput, UserUncheckedUpdateWithoutDisabilitiesInput>
    create: XOR<UserCreateWithoutDisabilitiesInput, UserUncheckedCreateWithoutDisabilitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisabilitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisabilitiesInput, UserUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type UserUpdateWithoutDisabilitiesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
    skills?: ListSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDisabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUncheckedUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    skills?: ListSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DisabilityUpsertWithoutUsersInput = {
    update: XOR<DisabilityUpdateWithoutUsersInput, DisabilityUncheckedUpdateWithoutUsersInput>
    create: XOR<DisabilityCreateWithoutUsersInput, DisabilityUncheckedCreateWithoutUsersInput>
    where?: DisabilityWhereInput
  }

  export type DisabilityUpdateToOneWithWhereWithoutUsersInput = {
    where?: DisabilityWhereInput
    data: XOR<DisabilityUpdateWithoutUsersInput, DisabilityUncheckedUpdateWithoutUsersInput>
  }

  export type DisabilityUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput
  }

  export type DisabilityUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutJobApplicationsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityCreateNestedManyWithoutUserInput
    skills?: ListSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobApplicationsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateUncheckedCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityUncheckedCreateNestedManyWithoutUserInput
    skills?: ListSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    skills?: ListJobSkillCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
    skills?: ListJobSkillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type CompanyCreateWithoutJobApplicationsInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobs?: JobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutJobApplicationsInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobs?: JobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutJobApplicationsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJobApplicationsInput, CompanyUncheckedCreateWithoutJobApplicationsInput>
  }

  export type UserUpsertWithoutJobApplicationsInput = {
    update: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type UserUpdateWithoutJobApplicationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUpdateManyWithoutUserNestedInput
    skills?: ListSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUncheckedUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUncheckedUpdateManyWithoutUserNestedInput
    skills?: ListSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    skills?: ListJobSkillUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: ListJobSkillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type CompanyUpsertWithoutJobApplicationsInput = {
    update: XOR<CompanyUpdateWithoutJobApplicationsInput, CompanyUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<CompanyCreateWithoutJobApplicationsInput, CompanyUncheckedCreateWithoutJobApplicationsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJobApplicationsInput, CompanyUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type CompanyUpdateWithoutJobApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobs?: JobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutJobApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobs?: JobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CategoryCreateWithoutDisabilitiesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutDisabilitiesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutDisabilitiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
  }

  export type ListDisabilityCreateWithoutDisabilityInput = {
    user: UserCreateNestedOneWithoutDisabilitiesInput
  }

  export type ListDisabilityUncheckedCreateWithoutDisabilityInput = {
    id?: number
    user_id: number
  }

  export type ListDisabilityCreateOrConnectWithoutDisabilityInput = {
    where: ListDisabilityWhereUniqueInput
    create: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput>
  }

  export type ListDisabilityCreateManyDisabilityInputEnvelope = {
    data: ListDisabilityCreateManyDisabilityInput | ListDisabilityCreateManyDisabilityInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutDisabilitiesInput = {
    update: XOR<CategoryUpdateWithoutDisabilitiesInput, CategoryUncheckedUpdateWithoutDisabilitiesInput>
    create: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDisabilitiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDisabilitiesInput, CategoryUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type CategoryUpdateWithoutDisabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutDisabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListDisabilityUpsertWithWhereUniqueWithoutDisabilityInput = {
    where: ListDisabilityWhereUniqueInput
    update: XOR<ListDisabilityUpdateWithoutDisabilityInput, ListDisabilityUncheckedUpdateWithoutDisabilityInput>
    create: XOR<ListDisabilityCreateWithoutDisabilityInput, ListDisabilityUncheckedCreateWithoutDisabilityInput>
  }

  export type ListDisabilityUpdateWithWhereUniqueWithoutDisabilityInput = {
    where: ListDisabilityWhereUniqueInput
    data: XOR<ListDisabilityUpdateWithoutDisabilityInput, ListDisabilityUncheckedUpdateWithoutDisabilityInput>
  }

  export type ListDisabilityUpdateManyWithWhereWithoutDisabilityInput = {
    where: ListDisabilityScalarWhereInput
    data: XOR<ListDisabilityUpdateManyMutationInput, ListDisabilityUncheckedUpdateManyWithoutDisabilityInput>
  }

  export type JobCreateWithoutAbilityInput = {
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    skills?: ListJobSkillCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutAbilityInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    skills?: ListJobSkillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutAbilityInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput>
  }

  export type JobCreateManyAbilityInputEnvelope = {
    data: JobCreateManyAbilityInput | JobCreateManyAbilityInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutAbilityInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutAbilityInput, JobUncheckedUpdateWithoutAbilityInput>
    create: XOR<JobCreateWithoutAbilityInput, JobUncheckedCreateWithoutAbilityInput>
  }

  export type JobUpdateWithWhereUniqueWithoutAbilityInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutAbilityInput, JobUncheckedUpdateWithoutAbilityInput>
  }

  export type JobUpdateManyWithWhereWithoutAbilityInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutAbilityInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    company_id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    employment_type?: StringFilter<"Job"> | string
    estimate_salary?: IntNullableFilter<"Job"> | number | null
    ability_id?: IntNullableFilter<"Job"> | number | null
  }

  export type UserCreateWithoutSkillsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number?: string | null
    city?: string | null
    is_verified: boolean
    certificates?: ListCertificateUncheckedCreateNestedManyWithoutUserInput
    disabilities?: ListDisabilityUncheckedCreateNestedManyWithoutUserInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    name: string
    jobs?: ListJobSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    jobs?: ListJobSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    certificates?: ListCertificateUncheckedUpdateManyWithoutUserNestedInput
    disabilities?: ListDisabilityUncheckedUpdateManyWithoutUserNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    jobs?: ListJobSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    jobs?: ListJobSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type JobApplicationCreateWithoutCompanyInput = {
    status: string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutCompanyInput = {
    id?: number
    user_id: number
    job_id: number
    status: string
  }

  export type JobApplicationCreateOrConnectWithoutCompanyInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput>
  }

  export type JobApplicationCreateManyCompanyInputEnvelope = {
    data: JobApplicationCreateManyCompanyInput | JobApplicationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutCompanyInput = {
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability?: AbilityCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    skills?: ListJobSkillCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    skills?: ListJobSkillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutCompanyInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
  }

  export type JobCreateManyCompanyInputEnvelope = {
    data: JobCreateManyCompanyInput | JobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutCompanyInput, JobApplicationUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobApplicationCreateWithoutCompanyInput, JobApplicationUncheckedCreateWithoutCompanyInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutCompanyInput, JobApplicationUncheckedUpdateWithoutCompanyInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutCompanyInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutCompanyInput, JobUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
  }

  export type JobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutCompanyInput, JobUncheckedUpdateWithoutCompanyInput>
  }

  export type JobUpdateManyWithWhereWithoutCompanyInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DisabilityCreateWithoutCategoryInput = {
    name: string
    description: string
    users?: ListDisabilityCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    users?: ListDisabilityUncheckedCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityCreateOrConnectWithoutCategoryInput = {
    where: DisabilityWhereUniqueInput
    create: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput>
  }

  export type DisabilityCreateManyCategoryInputEnvelope = {
    data: DisabilityCreateManyCategoryInput | DisabilityCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type DisabilityUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DisabilityWhereUniqueInput
    update: XOR<DisabilityUpdateWithoutCategoryInput, DisabilityUncheckedUpdateWithoutCategoryInput>
    create: XOR<DisabilityCreateWithoutCategoryInput, DisabilityUncheckedCreateWithoutCategoryInput>
  }

  export type DisabilityUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DisabilityWhereUniqueInput
    data: XOR<DisabilityUpdateWithoutCategoryInput, DisabilityUncheckedUpdateWithoutCategoryInput>
  }

  export type DisabilityUpdateManyWithWhereWithoutCategoryInput = {
    where: DisabilityScalarWhereInput
    data: XOR<DisabilityUpdateManyMutationInput, DisabilityUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DisabilityScalarWhereInput = {
    AND?: DisabilityScalarWhereInput | DisabilityScalarWhereInput[]
    OR?: DisabilityScalarWhereInput[]
    NOT?: DisabilityScalarWhereInput | DisabilityScalarWhereInput[]
    id?: IntFilter<"Disability"> | number
    category_id?: IntFilter<"Disability"> | number
    name?: StringFilter<"Disability"> | string
    description?: StringFilter<"Disability"> | string
  }

  export type JobCreateWithoutSkillsInput = {
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSkillsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSkillsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSkillsInput, JobUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutJobsInput = {
    name: string
    users?: ListSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    users?: ListSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutJobsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutJobsInput, SkillUncheckedCreateWithoutJobsInput>
  }

  export type JobUpsertWithoutSkillsInput = {
    update: XOR<JobUpdateWithoutSkillsInput, JobUncheckedUpdateWithoutSkillsInput>
    create: XOR<JobCreateWithoutSkillsInput, JobUncheckedCreateWithoutSkillsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutSkillsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutSkillsInput, JobUncheckedUpdateWithoutSkillsInput>
  }

  export type JobUpdateWithoutSkillsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type SkillUpsertWithoutJobsInput = {
    update: XOR<SkillUpdateWithoutJobsInput, SkillUncheckedUpdateWithoutJobsInput>
    create: XOR<SkillCreateWithoutJobsInput, SkillUncheckedCreateWithoutJobsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutJobsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutJobsInput, SkillUncheckedUpdateWithoutJobsInput>
  }

  export type SkillUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: ListSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: ListSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type CompanyCreateWithoutJobsInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobApplications?: JobApplicationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    email: string
    password: string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutJobsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
  }

  export type AbilityCreateWithoutJobsInput = {
    name: string
  }

  export type AbilityUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
  }

  export type AbilityCreateOrConnectWithoutJobsInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutJobsInput, AbilityUncheckedCreateWithoutJobsInput>
  }

  export type JobApplicationCreateWithoutJobInput = {
    status: string
    user: UserCreateNestedOneWithoutJobApplicationsInput
    company: CompanyCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    user_id: number
    company_id: number
    status: string
  }

  export type JobApplicationCreateOrConnectWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationCreateManyJobInputEnvelope = {
    data: JobApplicationCreateManyJobInput | JobApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ListJobSkillCreateWithoutJobInput = {
    skill: SkillCreateNestedOneWithoutJobsInput
  }

  export type ListJobSkillUncheckedCreateWithoutJobInput = {
    id?: number
    skill_id: number
  }

  export type ListJobSkillCreateOrConnectWithoutJobInput = {
    where: ListJobSkillWhereUniqueInput
    create: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput>
  }

  export type ListJobSkillCreateManyJobInputEnvelope = {
    data: ListJobSkillCreateManyJobInput | ListJobSkillCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutJobsInput = {
    update: XOR<CompanyUpdateWithoutJobsInput, CompanyUncheckedUpdateWithoutJobsInput>
    create: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJobsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJobsInput, CompanyUncheckedUpdateWithoutJobsInput>
  }

  export type CompanyUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobApplications?: JobApplicationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type AbilityUpsertWithoutJobsInput = {
    update: XOR<AbilityUpdateWithoutJobsInput, AbilityUncheckedUpdateWithoutJobsInput>
    create: XOR<AbilityCreateWithoutJobsInput, AbilityUncheckedCreateWithoutJobsInput>
    where?: AbilityWhereInput
  }

  export type AbilityUpdateToOneWithWhereWithoutJobsInput = {
    where?: AbilityWhereInput
    data: XOR<AbilityUpdateWithoutJobsInput, AbilityUncheckedUpdateWithoutJobsInput>
  }

  export type AbilityUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type ListJobSkillUpsertWithWhereUniqueWithoutJobInput = {
    where: ListJobSkillWhereUniqueInput
    update: XOR<ListJobSkillUpdateWithoutJobInput, ListJobSkillUncheckedUpdateWithoutJobInput>
    create: XOR<ListJobSkillCreateWithoutJobInput, ListJobSkillUncheckedCreateWithoutJobInput>
  }

  export type ListJobSkillUpdateWithWhereUniqueWithoutJobInput = {
    where: ListJobSkillWhereUniqueInput
    data: XOR<ListJobSkillUpdateWithoutJobInput, ListJobSkillUncheckedUpdateWithoutJobInput>
  }

  export type ListJobSkillUpdateManyWithWhereWithoutJobInput = {
    where: ListJobSkillScalarWhereInput
    data: XOR<ListJobSkillUpdateManyMutationInput, ListJobSkillUncheckedUpdateManyWithoutJobInput>
  }

  export type ListCertificateCreateManyUserInput = {
    id?: number
    name?: string | null
    description?: string | null
  }

  export type ListDisabilityCreateManyUserInput = {
    id?: number
    disability_id: number
  }

  export type JobApplicationCreateManyUserInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
  }

  export type ListSkillCreateManyUserInput = {
    id?: number
    skill_id: number
  }

  export type ListCertificateUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListCertificateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListCertificateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListDisabilityUpdateWithoutUserInput = {
    disability?: DisabilityUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ListDisabilityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListDisabilityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobApplicationUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ListSkillUpdateWithoutUserInput = {
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ListSkillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListSkillUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListSkillCreateManySkillInput = {
    id?: number
    user_id: number
  }

  export type ListJobSkillCreateManySkillInput = {
    id?: number
    job_id: number
  }

  export type ListSkillUpdateWithoutSkillInput = {
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type ListSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListJobSkillUpdateWithoutSkillInput = {
    job?: JobUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type ListJobSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListJobSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListDisabilityCreateManyDisabilityInput = {
    id?: number
    user_id: number
  }

  export type ListDisabilityUpdateWithoutDisabilityInput = {
    user?: UserUpdateOneRequiredWithoutDisabilitiesNestedInput
  }

  export type ListDisabilityUncheckedUpdateWithoutDisabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListDisabilityUncheckedUpdateManyWithoutDisabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobCreateManyAbilityInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
  }

  export type JobUpdateWithoutAbilityInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobApplicationCreateManyCompanyInput = {
    id?: number
    user_id: number
    job_id: number
    status: string
  }

  export type JobCreateManyCompanyInput = {
    id?: number
    title: string
    description: string
    employment_type: string
    estimate_salary?: number | null
    ability_id?: number | null
  }

  export type JobApplicationUpdateWithoutCompanyInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    skills?: ListJobSkillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    estimate_salary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DisabilityCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
  }

  export type DisabilityUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: ListDisabilityUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: ListDisabilityUncheckedUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationCreateManyJobInput = {
    id?: number
    user_id: number
    company_id: number
    status: string
  }

  export type ListJobSkillCreateManyJobInput = {
    id?: number
    skill_id: number
  }

  export type JobApplicationUpdateWithoutJobInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ListJobSkillUpdateWithoutJobInput = {
    skill?: SkillUpdateOneRequiredWithoutJobsNestedInput
  }

  export type ListJobSkillUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ListJobSkillUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillCountOutputTypeDefaultArgs instead
     */
    export type SkillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisabilityCountOutputTypeDefaultArgs instead
     */
    export type DisabilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisabilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AbilityCountOutputTypeDefaultArgs instead
     */
    export type AbilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AbilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListCertificateDefaultArgs instead
     */
    export type ListCertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListCertificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillDefaultArgs instead
     */
    export type SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListDisabilityDefaultArgs instead
     */
    export type ListDisabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListDisabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobApplicationDefaultArgs instead
     */
    export type JobApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisabilityDefaultArgs instead
     */
    export type DisabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AbilityDefaultArgs instead
     */
    export type AbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AbilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListSkillDefaultArgs instead
     */
    export type ListSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListSkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListJobSkillDefaultArgs instead
     */
    export type ListJobSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListJobSkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}