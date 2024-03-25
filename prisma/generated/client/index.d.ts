
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
 * Model Job_seeker
 * 
 */
export type Job_seeker = $Result.DefaultSelection<Prisma.$Job_seekerPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Jobs
 * 
 */
export type Jobs = $Result.DefaultSelection<Prisma.$JobsPayload>
/**
 * Model List_certificate
 * 
 */
export type List_certificate = $Result.DefaultSelection<Prisma.$List_certificatePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model List_disability
 * 
 */
export type List_disability = $Result.DefaultSelection<Prisma.$List_disabilityPayload>
/**
 * Model Job_application
 * 
 */
export type Job_application = $Result.DefaultSelection<Prisma.$Job_applicationPayload>
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
 * Model List_skills
 * 
 */
export type List_skills = $Result.DefaultSelection<Prisma.$List_skillsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model List_job_skill
 * 
 */
export type List_job_skill = $Result.DefaultSelection<Prisma.$List_job_skillPayload>

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
   * `prisma.job_seeker`: Exposes CRUD operations for the **Job_seeker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_seekers
    * const job_seekers = await prisma.job_seeker.findMany()
    * ```
    */
  get job_seeker(): Prisma.Job_seekerDelegate<ExtArgs>;

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
   * `prisma.jobs`: Exposes CRUD operations for the **Jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.JobsDelegate<ExtArgs>;

  /**
   * `prisma.list_certificate`: Exposes CRUD operations for the **List_certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_certificates
    * const list_certificates = await prisma.list_certificate.findMany()
    * ```
    */
  get list_certificate(): Prisma.List_certificateDelegate<ExtArgs>;

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
   * `prisma.list_disability`: Exposes CRUD operations for the **List_disability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_disabilities
    * const list_disabilities = await prisma.list_disability.findMany()
    * ```
    */
  get list_disability(): Prisma.List_disabilityDelegate<ExtArgs>;

  /**
   * `prisma.job_application`: Exposes CRUD operations for the **Job_application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_applications
    * const job_applications = await prisma.job_application.findMany()
    * ```
    */
  get job_application(): Prisma.Job_applicationDelegate<ExtArgs>;

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
   * `prisma.list_skills`: Exposes CRUD operations for the **List_skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_skills
    * const list_skills = await prisma.list_skills.findMany()
    * ```
    */
  get list_skills(): Prisma.List_skillsDelegate<ExtArgs>;

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
   * `prisma.list_job_skill`: Exposes CRUD operations for the **List_job_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_job_skills
    * const list_job_skills = await prisma.list_job_skill.findMany()
    * ```
    */
  get list_job_skill(): Prisma.List_job_skillDelegate<ExtArgs>;
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
    Job_seeker: 'Job_seeker',
    Company: 'Company',
    Jobs: 'Jobs',
    List_certificate: 'List_certificate',
    Skill: 'Skill',
    List_disability: 'List_disability',
    Job_application: 'Job_application',
    Disability: 'Disability',
    Ability: 'Ability',
    List_skills: 'List_skills',
    Category: 'Category',
    List_job_skill: 'List_job_skill'
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
      modelProps: 'user' | 'job_seeker' | 'company' | 'jobs' | 'list_certificate' | 'skill' | 'list_disability' | 'job_application' | 'disability' | 'ability' | 'list_skills' | 'category' | 'list_job_skill'
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
      Job_seeker: {
        payload: Prisma.$Job_seekerPayload<ExtArgs>
        fields: Prisma.Job_seekerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_seekerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_seekerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          findFirst: {
            args: Prisma.Job_seekerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_seekerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          findMany: {
            args: Prisma.Job_seekerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>[]
          }
          create: {
            args: Prisma.Job_seekerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          createMany: {
            args: Prisma.Job_seekerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Job_seekerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          update: {
            args: Prisma.Job_seekerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          deleteMany: {
            args: Prisma.Job_seekerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Job_seekerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Job_seekerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seekerPayload>
          }
          aggregate: {
            args: Prisma.Job_seekerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob_seeker>
          }
          groupBy: {
            args: Prisma.Job_seekerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Job_seekerGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_seekerCountArgs<ExtArgs>,
            result: $Utils.Optional<Job_seekerCountAggregateOutputType> | number
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
      Jobs: {
        payload: Prisma.$JobsPayload<ExtArgs>
        fields: Prisma.JobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findFirst: {
            args: Prisma.JobsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findMany: {
            args: Prisma.JobsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>[]
          }
          create: {
            args: Prisma.JobsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          createMany: {
            args: Prisma.JobsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          update: {
            args: Prisma.JobsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          deleteMany: {
            args: Prisma.JobsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.JobsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobsCountArgs<ExtArgs>,
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      List_certificate: {
        payload: Prisma.$List_certificatePayload<ExtArgs>
        fields: Prisma.List_certificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.List_certificateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.List_certificateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          findFirst: {
            args: Prisma.List_certificateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.List_certificateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          findMany: {
            args: Prisma.List_certificateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>[]
          }
          create: {
            args: Prisma.List_certificateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          createMany: {
            args: Prisma.List_certificateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.List_certificateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          update: {
            args: Prisma.List_certificateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          deleteMany: {
            args: Prisma.List_certificateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.List_certificateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.List_certificateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_certificatePayload>
          }
          aggregate: {
            args: Prisma.List_certificateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList_certificate>
          }
          groupBy: {
            args: Prisma.List_certificateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<List_certificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.List_certificateCountArgs<ExtArgs>,
            result: $Utils.Optional<List_certificateCountAggregateOutputType> | number
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
      List_disability: {
        payload: Prisma.$List_disabilityPayload<ExtArgs>
        fields: Prisma.List_disabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.List_disabilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.List_disabilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          findFirst: {
            args: Prisma.List_disabilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.List_disabilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          findMany: {
            args: Prisma.List_disabilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>[]
          }
          create: {
            args: Prisma.List_disabilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          createMany: {
            args: Prisma.List_disabilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.List_disabilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          update: {
            args: Prisma.List_disabilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          deleteMany: {
            args: Prisma.List_disabilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.List_disabilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.List_disabilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_disabilityPayload>
          }
          aggregate: {
            args: Prisma.List_disabilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList_disability>
          }
          groupBy: {
            args: Prisma.List_disabilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<List_disabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.List_disabilityCountArgs<ExtArgs>,
            result: $Utils.Optional<List_disabilityCountAggregateOutputType> | number
          }
        }
      }
      Job_application: {
        payload: Prisma.$Job_applicationPayload<ExtArgs>
        fields: Prisma.Job_applicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_applicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_applicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          findFirst: {
            args: Prisma.Job_applicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_applicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          findMany: {
            args: Prisma.Job_applicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>[]
          }
          create: {
            args: Prisma.Job_applicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          createMany: {
            args: Prisma.Job_applicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Job_applicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          update: {
            args: Prisma.Job_applicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          deleteMany: {
            args: Prisma.Job_applicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Job_applicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Job_applicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_applicationPayload>
          }
          aggregate: {
            args: Prisma.Job_applicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob_application>
          }
          groupBy: {
            args: Prisma.Job_applicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Job_applicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_applicationCountArgs<ExtArgs>,
            result: $Utils.Optional<Job_applicationCountAggregateOutputType> | number
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
      List_skills: {
        payload: Prisma.$List_skillsPayload<ExtArgs>
        fields: Prisma.List_skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.List_skillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.List_skillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          findFirst: {
            args: Prisma.List_skillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.List_skillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          findMany: {
            args: Prisma.List_skillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>[]
          }
          create: {
            args: Prisma.List_skillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          createMany: {
            args: Prisma.List_skillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.List_skillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          update: {
            args: Prisma.List_skillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          deleteMany: {
            args: Prisma.List_skillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.List_skillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.List_skillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_skillsPayload>
          }
          aggregate: {
            args: Prisma.List_skillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList_skills>
          }
          groupBy: {
            args: Prisma.List_skillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<List_skillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.List_skillsCountArgs<ExtArgs>,
            result: $Utils.Optional<List_skillsCountAggregateOutputType> | number
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
      List_job_skill: {
        payload: Prisma.$List_job_skillPayload<ExtArgs>
        fields: Prisma.List_job_skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.List_job_skillFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.List_job_skillFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          findFirst: {
            args: Prisma.List_job_skillFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.List_job_skillFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          findMany: {
            args: Prisma.List_job_skillFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>[]
          }
          create: {
            args: Prisma.List_job_skillCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          createMany: {
            args: Prisma.List_job_skillCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.List_job_skillDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          update: {
            args: Prisma.List_job_skillUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          deleteMany: {
            args: Prisma.List_job_skillDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.List_job_skillUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.List_job_skillUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_job_skillPayload>
          }
          aggregate: {
            args: Prisma.List_job_skillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList_job_skill>
          }
          groupBy: {
            args: Prisma.List_job_skillGroupByArgs<ExtArgs>,
            result: $Utils.Optional<List_job_skillGroupByOutputType>[]
          }
          count: {
            args: Prisma.List_job_skillCountArgs<ExtArgs>,
            result: $Utils.Optional<List_job_skillCountAggregateOutputType> | number
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
    job_seeker: number
    company: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | UserCountOutputTypeCountJob_seekerArgs
    company?: boolean | UserCountOutputTypeCountCompanyArgs
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
  export type UserCountOutputTypeCountJob_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seekerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }



  /**
   * Count Type Job_seekerCountOutputType
   */

  export type Job_seekerCountOutputType = {
    certificates: number
    disabilities: number
    skills: number
    job_applications: number
  }

  export type Job_seekerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | Job_seekerCountOutputTypeCountCertificatesArgs
    disabilities?: boolean | Job_seekerCountOutputTypeCountDisabilitiesArgs
    skills?: boolean | Job_seekerCountOutputTypeCountSkillsArgs
    job_applications?: boolean | Job_seekerCountOutputTypeCountJob_applicationsArgs
  }

  // Custom InputTypes

  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seekerCountOutputType
     */
    select?: Job_seekerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_certificateWhereInput
  }


  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountDisabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_disabilityWhereInput
  }


  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_skillsWhereInput
  }


  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountJob_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobs: number
    job_application: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | CompanyCountOutputTypeCountJobsArgs
    job_application?: boolean | CompanyCountOutputTypeCountJob_applicationArgs
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
  export type CompanyCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJob_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }



  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    jobSkills: number
    jobApplications: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSkills?: boolean | JobsCountOutputTypeCountJobSkillsArgs
    jobApplications?: boolean | JobsCountOutputTypeCountJobApplicationsArgs
  }

  // Custom InputTypes

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     */
    select?: JobsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountJobSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_job_skillWhereInput
  }


  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }



  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    list_skill: number
    list_job_skill: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_skill?: boolean | SkillCountOutputTypeCountList_skillArgs
    list_job_skill?: boolean | SkillCountOutputTypeCountList_job_skillArgs
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
  export type SkillCountOutputTypeCountList_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_skillsWhereInput
  }


  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountList_job_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_job_skillWhereInput
  }



  /**
   * Count Type DisabilityCountOutputType
   */

  export type DisabilityCountOutputType = {
    list_disabilities: number
  }

  export type DisabilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_disabilities?: boolean | DisabilityCountOutputTypeCountList_disabilitiesArgs
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
  export type DisabilityCountOutputTypeCountList_disabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_disabilityWhereInput
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
    where?: JobsWhereInput
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
    email: string | null
    password: string | null
    role: string | null
    is_verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    is_verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
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
    email?: true
    password?: true
    role?: true
    is_verified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    is_verified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
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
    email: string
    password: string
    role: string
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
    email?: boolean
    password?: boolean
    role?: boolean
    is_verified?: boolean
    job_seeker?: boolean | User$job_seekerArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_verified?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | User$job_seekerArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
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

    job_seeker<T extends User$job_seekerArgs<ExtArgs> = {}>(args?: Subset<T, User$job_seekerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
   * User.job_seeker
   */
  export type User$job_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    where?: Job_seekerWhereInput
    orderBy?: Job_seekerOrderByWithRelationInput | Job_seekerOrderByWithRelationInput[]
    cursor?: Job_seekerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[]
  }


  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
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
   * Model Job_seeker
   */

  export type AggregateJob_seeker = {
    _count: Job_seekerCountAggregateOutputType | null
    _avg: Job_seekerAvgAggregateOutputType | null
    _sum: Job_seekerSumAggregateOutputType | null
    _min: Job_seekerMinAggregateOutputType | null
    _max: Job_seekerMaxAggregateOutputType | null
  }

  export type Job_seekerAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Job_seekerSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Job_seekerMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    fullname: string | null
    dob: Date | null
    gender: string | null
    phone_number: string | null
    city: string | null
  }

  export type Job_seekerMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    fullname: string | null
    dob: Date | null
    gender: string | null
    phone_number: string | null
    city: string | null
  }

  export type Job_seekerCountAggregateOutputType = {
    id: number
    user_id: number
    fullname: number
    dob: number
    gender: number
    phone_number: number
    city: number
    _all: number
  }


  export type Job_seekerAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Job_seekerSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Job_seekerMinAggregateInputType = {
    id?: true
    user_id?: true
    fullname?: true
    dob?: true
    gender?: true
    phone_number?: true
    city?: true
  }

  export type Job_seekerMaxAggregateInputType = {
    id?: true
    user_id?: true
    fullname?: true
    dob?: true
    gender?: true
    phone_number?: true
    city?: true
  }

  export type Job_seekerCountAggregateInputType = {
    id?: true
    user_id?: true
    fullname?: true
    dob?: true
    gender?: true
    phone_number?: true
    city?: true
    _all?: true
  }

  export type Job_seekerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_seeker to aggregate.
     */
    where?: Job_seekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seekers to fetch.
     */
    orderBy?: Job_seekerOrderByWithRelationInput | Job_seekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_seekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_seekers
    **/
    _count?: true | Job_seekerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_seekerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_seekerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_seekerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_seekerMaxAggregateInputType
  }

  export type GetJob_seekerAggregateType<T extends Job_seekerAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_seeker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_seeker[P]>
      : GetScalarType<T[P], AggregateJob_seeker[P]>
  }




  export type Job_seekerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seekerWhereInput
    orderBy?: Job_seekerOrderByWithAggregationInput | Job_seekerOrderByWithAggregationInput[]
    by: Job_seekerScalarFieldEnum[] | Job_seekerScalarFieldEnum
    having?: Job_seekerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_seekerCountAggregateInputType | true
    _avg?: Job_seekerAvgAggregateInputType
    _sum?: Job_seekerSumAggregateInputType
    _min?: Job_seekerMinAggregateInputType
    _max?: Job_seekerMaxAggregateInputType
  }

  export type Job_seekerGroupByOutputType = {
    id: number
    user_id: number
    fullname: string
    dob: Date
    gender: string
    phone_number: string | null
    city: string | null
    _count: Job_seekerCountAggregateOutputType | null
    _avg: Job_seekerAvgAggregateOutputType | null
    _sum: Job_seekerSumAggregateOutputType | null
    _min: Job_seekerMinAggregateOutputType | null
    _max: Job_seekerMaxAggregateOutputType | null
  }

  type GetJob_seekerGroupByPayload<T extends Job_seekerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_seekerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_seekerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_seekerGroupByOutputType[P]>
            : GetScalarType<T[P], Job_seekerGroupByOutputType[P]>
        }
      >
    >


  export type Job_seekerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    fullname?: boolean
    dob?: boolean
    gender?: boolean
    phone_number?: boolean
    city?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    certificates?: boolean | Job_seeker$certificatesArgs<ExtArgs>
    disabilities?: boolean | Job_seeker$disabilitiesArgs<ExtArgs>
    skills?: boolean | Job_seeker$skillsArgs<ExtArgs>
    job_applications?: boolean | Job_seeker$job_applicationsArgs<ExtArgs>
    _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_seeker"]>

  export type Job_seekerSelectScalar = {
    id?: boolean
    user_id?: boolean
    fullname?: boolean
    dob?: boolean
    gender?: boolean
    phone_number?: boolean
    city?: boolean
  }

  export type Job_seekerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    certificates?: boolean | Job_seeker$certificatesArgs<ExtArgs>
    disabilities?: boolean | Job_seeker$disabilitiesArgs<ExtArgs>
    skills?: boolean | Job_seeker$skillsArgs<ExtArgs>
    job_applications?: boolean | Job_seeker$job_applicationsArgs<ExtArgs>
    _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Job_seekerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_seeker"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      certificates: Prisma.$List_certificatePayload<ExtArgs>[]
      disabilities: Prisma.$List_disabilityPayload<ExtArgs>[]
      skills: Prisma.$List_skillsPayload<ExtArgs>[]
      job_applications: Prisma.$Job_applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      fullname: string
      dob: Date
      gender: string
      phone_number: string | null
      city: string | null
    }, ExtArgs["result"]["job_seeker"]>
    composites: {}
  }


  type Job_seekerGetPayload<S extends boolean | null | undefined | Job_seekerDefaultArgs> = $Result.GetResult<Prisma.$Job_seekerPayload, S>

  type Job_seekerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Job_seekerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Job_seekerCountAggregateInputType | true
    }

  export interface Job_seekerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_seeker'], meta: { name: 'Job_seeker' } }
    /**
     * Find zero or one Job_seeker that matches the filter.
     * @param {Job_seekerFindUniqueArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Job_seekerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerFindUniqueArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job_seeker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Job_seekerFindUniqueOrThrowArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Job_seekerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job_seeker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerFindFirstArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Job_seekerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerFindFirstArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job_seeker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerFindFirstOrThrowArgs} args - Arguments to find a Job_seeker
     * @example
     * // Get one Job_seeker
     * const job_seeker = await prisma.job_seeker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Job_seekerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Job_seekers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_seekers
     * const job_seekers = await prisma.job_seeker.findMany()
     * 
     * // Get first 10 Job_seekers
     * const job_seekers = await prisma.job_seeker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_seekerWithIdOnly = await prisma.job_seeker.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Job_seekerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job_seeker.
     * @param {Job_seekerCreateArgs} args - Arguments to create a Job_seeker.
     * @example
     * // Create one Job_seeker
     * const Job_seeker = await prisma.job_seeker.create({
     *   data: {
     *     // ... data to create a Job_seeker
     *   }
     * })
     * 
    **/
    create<T extends Job_seekerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerCreateArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Job_seekers.
     *     @param {Job_seekerCreateManyArgs} args - Arguments to create many Job_seekers.
     *     @example
     *     // Create many Job_seekers
     *     const job_seeker = await prisma.job_seeker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Job_seekerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_seeker.
     * @param {Job_seekerDeleteArgs} args - Arguments to delete one Job_seeker.
     * @example
     * // Delete one Job_seeker
     * const Job_seeker = await prisma.job_seeker.delete({
     *   where: {
     *     // ... filter to delete one Job_seeker
     *   }
     * })
     * 
    **/
    delete<T extends Job_seekerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerDeleteArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job_seeker.
     * @param {Job_seekerUpdateArgs} args - Arguments to update one Job_seeker.
     * @example
     * // Update one Job_seeker
     * const job_seeker = await prisma.job_seeker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Job_seekerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerUpdateArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Job_seekers.
     * @param {Job_seekerDeleteManyArgs} args - Arguments to filter Job_seekers to delete.
     * @example
     * // Delete a few Job_seekers
     * const { count } = await prisma.job_seeker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Job_seekerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seekerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_seekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_seekers
     * const job_seeker = await prisma.job_seeker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Job_seekerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_seeker.
     * @param {Job_seekerUpsertArgs} args - Arguments to update or create a Job_seeker.
     * @example
     * // Update or create a Job_seeker
     * const job_seeker = await prisma.job_seeker.upsert({
     *   create: {
     *     // ... data to create a Job_seeker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_seeker we want to update
     *   }
     * })
    **/
    upsert<T extends Job_seekerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seekerUpsertArgs<ExtArgs>>
    ): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Job_seekers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerCountArgs} args - Arguments to filter Job_seekers to count.
     * @example
     * // Count the number of Job_seekers
     * const count = await prisma.job_seeker.count({
     *   where: {
     *     // ... the filter for the Job_seekers we want to count
     *   }
     * })
    **/
    count<T extends Job_seekerCountArgs>(
      args?: Subset<T, Job_seekerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_seekerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_seeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_seekerAggregateArgs>(args: Subset<T, Job_seekerAggregateArgs>): Prisma.PrismaPromise<GetJob_seekerAggregateType<T>>

    /**
     * Group by Job_seeker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seekerGroupByArgs} args - Group by arguments.
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
      T extends Job_seekerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_seekerGroupByArgs['orderBy'] }
        : { orderBy?: Job_seekerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Job_seekerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_seekerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_seeker model
   */
  readonly fields: Job_seekerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_seeker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_seekerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    certificates<T extends Job_seeker$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    disabilities<T extends Job_seeker$disabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$disabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    skills<T extends Job_seeker$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_applications<T extends Job_seeker$job_applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$job_applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Job_seeker model
   */ 
  interface Job_seekerFieldRefs {
    readonly id: FieldRef<"Job_seeker", 'Int'>
    readonly user_id: FieldRef<"Job_seeker", 'Int'>
    readonly fullname: FieldRef<"Job_seeker", 'String'>
    readonly dob: FieldRef<"Job_seeker", 'DateTime'>
    readonly gender: FieldRef<"Job_seeker", 'String'>
    readonly phone_number: FieldRef<"Job_seeker", 'String'>
    readonly city: FieldRef<"Job_seeker", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Job_seeker findUnique
   */
  export type Job_seekerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker to fetch.
     */
    where: Job_seekerWhereUniqueInput
  }


  /**
   * Job_seeker findUniqueOrThrow
   */
  export type Job_seekerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker to fetch.
     */
    where: Job_seekerWhereUniqueInput
  }


  /**
   * Job_seeker findFirst
   */
  export type Job_seekerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker to fetch.
     */
    where?: Job_seekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seekers to fetch.
     */
    orderBy?: Job_seekerOrderByWithRelationInput | Job_seekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_seekers.
     */
    cursor?: Job_seekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_seekers.
     */
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[]
  }


  /**
   * Job_seeker findFirstOrThrow
   */
  export type Job_seekerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker to fetch.
     */
    where?: Job_seekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seekers to fetch.
     */
    orderBy?: Job_seekerOrderByWithRelationInput | Job_seekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_seekers.
     */
    cursor?: Job_seekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seekers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_seekers.
     */
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[]
  }


  /**
   * Job_seeker findMany
   */
  export type Job_seekerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter, which Job_seekers to fetch.
     */
    where?: Job_seekerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seekers to fetch.
     */
    orderBy?: Job_seekerOrderByWithRelationInput | Job_seekerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_seekers.
     */
    cursor?: Job_seekerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seekers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seekers.
     */
    skip?: number
    distinct?: Job_seekerScalarFieldEnum | Job_seekerScalarFieldEnum[]
  }


  /**
   * Job_seeker create
   */
  export type Job_seekerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * The data needed to create a Job_seeker.
     */
    data: XOR<Job_seekerCreateInput, Job_seekerUncheckedCreateInput>
  }


  /**
   * Job_seeker createMany
   */
  export type Job_seekerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_seekers.
     */
    data: Job_seekerCreateManyInput | Job_seekerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job_seeker update
   */
  export type Job_seekerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * The data needed to update a Job_seeker.
     */
    data: XOR<Job_seekerUpdateInput, Job_seekerUncheckedUpdateInput>
    /**
     * Choose, which Job_seeker to update.
     */
    where: Job_seekerWhereUniqueInput
  }


  /**
   * Job_seeker updateMany
   */
  export type Job_seekerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_seekers.
     */
    data: XOR<Job_seekerUpdateManyMutationInput, Job_seekerUncheckedUpdateManyInput>
    /**
     * Filter which Job_seekers to update
     */
    where?: Job_seekerWhereInput
  }


  /**
   * Job_seeker upsert
   */
  export type Job_seekerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * The filter to search for the Job_seeker to update in case it exists.
     */
    where: Job_seekerWhereUniqueInput
    /**
     * In case the Job_seeker found by the `where` argument doesn't exist, create a new Job_seeker with this data.
     */
    create: XOR<Job_seekerCreateInput, Job_seekerUncheckedCreateInput>
    /**
     * In case the Job_seeker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_seekerUpdateInput, Job_seekerUncheckedUpdateInput>
  }


  /**
   * Job_seeker delete
   */
  export type Job_seekerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
    /**
     * Filter which Job_seeker to delete.
     */
    where: Job_seekerWhereUniqueInput
  }


  /**
   * Job_seeker deleteMany
   */
  export type Job_seekerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_seekers to delete
     */
    where?: Job_seekerWhereInput
  }


  /**
   * Job_seeker.certificates
   */
  export type Job_seeker$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    where?: List_certificateWhereInput
    orderBy?: List_certificateOrderByWithRelationInput | List_certificateOrderByWithRelationInput[]
    cursor?: List_certificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_certificateScalarFieldEnum | List_certificateScalarFieldEnum[]
  }


  /**
   * Job_seeker.disabilities
   */
  export type Job_seeker$disabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    where?: List_disabilityWhereInput
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    cursor?: List_disabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_disabilityScalarFieldEnum | List_disabilityScalarFieldEnum[]
  }


  /**
   * Job_seeker.skills
   */
  export type Job_seeker$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    where?: List_skillsWhereInput
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    cursor?: List_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_skillsScalarFieldEnum | List_skillsScalarFieldEnum[]
  }


  /**
   * Job_seeker.job_applications
   */
  export type Job_seeker$job_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    where?: Job_applicationWhereInput
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    cursor?: Job_applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
  }


  /**
   * Job_seeker without action
   */
  export type Job_seekerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker
     */
    select?: Job_seekerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seekerInclude<ExtArgs> | null
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
    user_id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    city: string | null
    about: string | null
    logo: string | null
    picture: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    city: string | null
    about: string | null
    logo: string | null
    picture: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    city: number
    about: number
    logo: number
    picture: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    city?: true
    about?: true
    logo?: true
    picture?: true
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
    user_id: number
    name: string
    city: string
    about: string
    logo: string | null
    picture: string | null
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
    user_id?: boolean
    name?: boolean
    city?: boolean
    about?: boolean
    logo?: boolean
    picture?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    job_application?: boolean | Company$job_applicationArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    city?: boolean
    about?: boolean
    logo?: boolean
    picture?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    job_application?: boolean | Company$job_applicationArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobsPayload<ExtArgs>[]
      job_application: Prisma.$Job_applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      city: string
      about: string
      logo: string | null
      picture: string | null
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

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jobs<T extends Company$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_application<T extends Company$job_applicationArgs<ExtArgs> = {}>(args?: Subset<T, Company$job_applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly user_id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly about: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly picture: FieldRef<"Company", 'String'>
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
   * Company.jobs
   */
  export type Company$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    cursor?: JobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }


  /**
   * Company.job_application
   */
  export type Company$job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    where?: Job_applicationWhereInput
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    cursor?: Job_applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
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
   * Model Jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    estimateSalary: number | null
    ability_id: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    estimateSalary: number | null
    ability_id: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employmentType: string | null
    estimateSalary: number | null
    ability_id: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employmentType: string | null
    estimateSalary: number | null
    ability_id: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    company_id: number
    title: number
    description: number
    employmentType: number
    estimateSalary: number
    ability_id: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    company_id?: true
    estimateSalary?: true
    ability_id?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    company_id?: true
    estimateSalary?: true
    ability_id?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employmentType?: true
    estimateSalary?: true
    ability_id?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employmentType?: true
    estimateSalary?: true
    ability_id?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employmentType?: true
    estimateSalary?: true
    ability_id?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to aggregate.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobsWhereUniqueInput
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
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type JobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithAggregationInput | JobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: JobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary: number | null
    ability_id: number | null
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends JobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type JobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    estimateSalary?: boolean
    ability_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    ability?: boolean | Jobs$abilityArgs<ExtArgs>
    jobSkills?: boolean | Jobs$jobSkillsArgs<ExtArgs>
    jobApplications?: boolean | Jobs$jobApplicationsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type JobsSelectScalar = {
    id?: boolean
    company_id?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    estimateSalary?: boolean
    ability_id?: boolean
  }

  export type JobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    ability?: boolean | Jobs$abilityArgs<ExtArgs>
    jobSkills?: boolean | Jobs$jobSkillsArgs<ExtArgs>
    jobApplications?: boolean | Jobs$jobApplicationsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobs"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      ability: Prisma.$AbilityPayload<ExtArgs> | null
      jobSkills: Prisma.$List_job_skillPayload<ExtArgs>[]
      jobApplications: Prisma.$Job_applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      title: string
      description: string
      employmentType: string
      estimateSalary: number | null
      ability_id: number | null
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }


  type JobsGetPayload<S extends boolean | null | undefined | JobsDefaultArgs> = $Result.GetResult<Prisma.$JobsPayload, S>

  type JobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface JobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jobs'], meta: { name: 'Jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {JobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobsFindUniqueArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jobs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsFindFirstArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jobs.
     * @param {JobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
    **/
    create<T extends JobsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobsCreateArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {JobsCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const jobs = await prisma.jobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {JobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
    **/
    delete<T extends JobsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobsDeleteArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jobs.
     * @param {JobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobsUpdateArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {JobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
    **/
    upsert<T extends JobsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobsUpsertArgs<ExtArgs>>
    ): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobsCountArgs>(
      args?: Subset<T, JobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsGroupByArgs} args - Group by arguments.
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
      T extends JobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobsGroupByArgs['orderBy'] }
        : { orderBy?: JobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jobs model
   */
  readonly fields: JobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ability<T extends Jobs$abilityArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$abilityArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    jobSkills<T extends Jobs$jobSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$jobSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findMany'> | Null>;

    jobApplications<T extends Jobs$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Jobs model
   */ 
  interface JobsFieldRefs {
    readonly id: FieldRef<"Jobs", 'Int'>
    readonly company_id: FieldRef<"Jobs", 'Int'>
    readonly title: FieldRef<"Jobs", 'String'>
    readonly description: FieldRef<"Jobs", 'String'>
    readonly employmentType: FieldRef<"Jobs", 'String'>
    readonly estimateSalary: FieldRef<"Jobs", 'Int'>
    readonly ability_id: FieldRef<"Jobs", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Jobs findUnique
   */
  export type JobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs findUniqueOrThrow
   */
  export type JobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs findFirst
   */
  export type JobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
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
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }


  /**
   * Jobs findFirstOrThrow
   */
  export type JobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
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
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }


  /**
   * Jobs findMany
   */
  export type JobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobsWhereUniqueInput
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
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }


  /**
   * Jobs create
   */
  export type JobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to create a Jobs.
     */
    data: XOR<JobsCreateInput, JobsUncheckedCreateInput>
  }


  /**
   * Jobs createMany
   */
  export type JobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobsCreateManyInput | JobsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Jobs update
   */
  export type JobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to update a Jobs.
     */
    data: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
    /**
     * Choose, which Jobs to update.
     */
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs updateMany
   */
  export type JobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobsWhereInput
  }


  /**
   * Jobs upsert
   */
  export type JobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The filter to search for the Jobs to update in case it exists.
     */
    where: JobsWhereUniqueInput
    /**
     * In case the Jobs found by the `where` argument doesn't exist, create a new Jobs with this data.
     */
    create: XOR<JobsCreateInput, JobsUncheckedCreateInput>
    /**
     * In case the Jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
  }


  /**
   * Jobs delete
   */
  export type JobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter which Jobs to delete.
     */
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs deleteMany
   */
  export type JobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobsWhereInput
  }


  /**
   * Jobs.ability
   */
  export type Jobs$abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Jobs.jobSkills
   */
  export type Jobs$jobSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    where?: List_job_skillWhereInput
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    cursor?: List_job_skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_job_skillScalarFieldEnum | List_job_skillScalarFieldEnum[]
  }


  /**
   * Jobs.jobApplications
   */
  export type Jobs$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    where?: Job_applicationWhereInput
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    cursor?: Job_applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
  }


  /**
   * Jobs without action
   */
  export type JobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
  }



  /**
   * Model List_certificate
   */

  export type AggregateList_certificate = {
    _count: List_certificateCountAggregateOutputType | null
    _avg: List_certificateAvgAggregateOutputType | null
    _sum: List_certificateSumAggregateOutputType | null
    _min: List_certificateMinAggregateOutputType | null
    _max: List_certificateMaxAggregateOutputType | null
  }

  export type List_certificateAvgAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
  }

  export type List_certificateSumAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
  }

  export type List_certificateMinAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    name: string | null
    description: string | null
  }

  export type List_certificateMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    name: string | null
    description: string | null
  }

  export type List_certificateCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    name: number
    description: number
    _all: number
  }


  export type List_certificateAvgAggregateInputType = {
    id?: true
    job_seeker_id?: true
  }

  export type List_certificateSumAggregateInputType = {
    id?: true
    job_seeker_id?: true
  }

  export type List_certificateMinAggregateInputType = {
    id?: true
    job_seeker_id?: true
    name?: true
    description?: true
  }

  export type List_certificateMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    name?: true
    description?: true
  }

  export type List_certificateCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type List_certificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_certificate to aggregate.
     */
    where?: List_certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_certificates to fetch.
     */
    orderBy?: List_certificateOrderByWithRelationInput | List_certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: List_certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned List_certificates
    **/
    _count?: true | List_certificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_certificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_certificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_certificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_certificateMaxAggregateInputType
  }

  export type GetList_certificateAggregateType<T extends List_certificateAggregateArgs> = {
        [P in keyof T & keyof AggregateList_certificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_certificate[P]>
      : GetScalarType<T[P], AggregateList_certificate[P]>
  }




  export type List_certificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_certificateWhereInput
    orderBy?: List_certificateOrderByWithAggregationInput | List_certificateOrderByWithAggregationInput[]
    by: List_certificateScalarFieldEnum[] | List_certificateScalarFieldEnum
    having?: List_certificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_certificateCountAggregateInputType | true
    _avg?: List_certificateAvgAggregateInputType
    _sum?: List_certificateSumAggregateInputType
    _min?: List_certificateMinAggregateInputType
    _max?: List_certificateMaxAggregateInputType
  }

  export type List_certificateGroupByOutputType = {
    id: number
    job_seeker_id: number
    name: string | null
    description: string | null
    _count: List_certificateCountAggregateOutputType | null
    _avg: List_certificateAvgAggregateOutputType | null
    _sum: List_certificateSumAggregateOutputType | null
    _min: List_certificateMinAggregateOutputType | null
    _max: List_certificateMaxAggregateOutputType | null
  }

  type GetList_certificateGroupByPayload<T extends List_certificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_certificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_certificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_certificateGroupByOutputType[P]>
            : GetScalarType<T[P], List_certificateGroupByOutputType[P]>
        }
      >
    >


  export type List_certificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_seeker_id?: boolean
    name?: boolean
    description?: boolean
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list_certificate"]>

  export type List_certificateSelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type List_certificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }


  export type $List_certificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_certificate"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      name: string | null
      description: string | null
    }, ExtArgs["result"]["list_certificate"]>
    composites: {}
  }


  type List_certificateGetPayload<S extends boolean | null | undefined | List_certificateDefaultArgs> = $Result.GetResult<Prisma.$List_certificatePayload, S>

  type List_certificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<List_certificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: List_certificateCountAggregateInputType | true
    }

  export interface List_certificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List_certificate'], meta: { name: 'List_certificate' } }
    /**
     * Find zero or one List_certificate that matches the filter.
     * @param {List_certificateFindUniqueArgs} args - Arguments to find a List_certificate
     * @example
     * // Get one List_certificate
     * const list_certificate = await prisma.list_certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends List_certificateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateFindUniqueArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List_certificate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {List_certificateFindUniqueOrThrowArgs} args - Arguments to find a List_certificate
     * @example
     * // Get one List_certificate
     * const list_certificate = await prisma.list_certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends List_certificateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List_certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateFindFirstArgs} args - Arguments to find a List_certificate
     * @example
     * // Get one List_certificate
     * const list_certificate = await prisma.list_certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends List_certificateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateFindFirstArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List_certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateFindFirstOrThrowArgs} args - Arguments to find a List_certificate
     * @example
     * // Get one List_certificate
     * const list_certificate = await prisma.list_certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends List_certificateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more List_certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_certificates
     * const list_certificates = await prisma.list_certificate.findMany()
     * 
     * // Get first 10 List_certificates
     * const list_certificates = await prisma.list_certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_certificateWithIdOnly = await prisma.list_certificate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends List_certificateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List_certificate.
     * @param {List_certificateCreateArgs} args - Arguments to create a List_certificate.
     * @example
     * // Create one List_certificate
     * const List_certificate = await prisma.list_certificate.create({
     *   data: {
     *     // ... data to create a List_certificate
     *   }
     * })
     * 
    **/
    create<T extends List_certificateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateCreateArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many List_certificates.
     *     @param {List_certificateCreateManyArgs} args - Arguments to create many List_certificates.
     *     @example
     *     // Create many List_certificates
     *     const list_certificate = await prisma.list_certificate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends List_certificateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List_certificate.
     * @param {List_certificateDeleteArgs} args - Arguments to delete one List_certificate.
     * @example
     * // Delete one List_certificate
     * const List_certificate = await prisma.list_certificate.delete({
     *   where: {
     *     // ... filter to delete one List_certificate
     *   }
     * })
     * 
    **/
    delete<T extends List_certificateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateDeleteArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List_certificate.
     * @param {List_certificateUpdateArgs} args - Arguments to update one List_certificate.
     * @example
     * // Update one List_certificate
     * const list_certificate = await prisma.list_certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends List_certificateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateUpdateArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more List_certificates.
     * @param {List_certificateDeleteManyArgs} args - Arguments to filter List_certificates to delete.
     * @example
     * // Delete a few List_certificates
     * const { count } = await prisma.list_certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends List_certificateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_certificateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_certificates
     * const list_certificate = await prisma.list_certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends List_certificateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List_certificate.
     * @param {List_certificateUpsertArgs} args - Arguments to update or create a List_certificate.
     * @example
     * // Update or create a List_certificate
     * const list_certificate = await prisma.list_certificate.upsert({
     *   create: {
     *     // ... data to create a List_certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_certificate we want to update
     *   }
     * })
    **/
    upsert<T extends List_certificateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, List_certificateUpsertArgs<ExtArgs>>
    ): Prisma__List_certificateClient<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of List_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateCountArgs} args - Arguments to filter List_certificates to count.
     * @example
     * // Count the number of List_certificates
     * const count = await prisma.list_certificate.count({
     *   where: {
     *     // ... the filter for the List_certificates we want to count
     *   }
     * })
    **/
    count<T extends List_certificateCountArgs>(
      args?: Subset<T, List_certificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_certificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends List_certificateAggregateArgs>(args: Subset<T, List_certificateAggregateArgs>): Prisma.PrismaPromise<GetList_certificateAggregateType<T>>

    /**
     * Group by List_certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_certificateGroupByArgs} args - Group by arguments.
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
      T extends List_certificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: List_certificateGroupByArgs['orderBy'] }
        : { orderBy?: List_certificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, List_certificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_certificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List_certificate model
   */
  readonly fields: List_certificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List_certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__List_certificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends Job_seekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_seekerDefaultArgs<ExtArgs>>): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the List_certificate model
   */ 
  interface List_certificateFieldRefs {
    readonly id: FieldRef<"List_certificate", 'Int'>
    readonly job_seeker_id: FieldRef<"List_certificate", 'Int'>
    readonly name: FieldRef<"List_certificate", 'String'>
    readonly description: FieldRef<"List_certificate", 'String'>
  }
    

  // Custom InputTypes

  /**
   * List_certificate findUnique
   */
  export type List_certificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter, which List_certificate to fetch.
     */
    where: List_certificateWhereUniqueInput
  }


  /**
   * List_certificate findUniqueOrThrow
   */
  export type List_certificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter, which List_certificate to fetch.
     */
    where: List_certificateWhereUniqueInput
  }


  /**
   * List_certificate findFirst
   */
  export type List_certificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter, which List_certificate to fetch.
     */
    where?: List_certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_certificates to fetch.
     */
    orderBy?: List_certificateOrderByWithRelationInput | List_certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_certificates.
     */
    cursor?: List_certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_certificates.
     */
    distinct?: List_certificateScalarFieldEnum | List_certificateScalarFieldEnum[]
  }


  /**
   * List_certificate findFirstOrThrow
   */
  export type List_certificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter, which List_certificate to fetch.
     */
    where?: List_certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_certificates to fetch.
     */
    orderBy?: List_certificateOrderByWithRelationInput | List_certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_certificates.
     */
    cursor?: List_certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_certificates.
     */
    distinct?: List_certificateScalarFieldEnum | List_certificateScalarFieldEnum[]
  }


  /**
   * List_certificate findMany
   */
  export type List_certificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter, which List_certificates to fetch.
     */
    where?: List_certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_certificates to fetch.
     */
    orderBy?: List_certificateOrderByWithRelationInput | List_certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing List_certificates.
     */
    cursor?: List_certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_certificates.
     */
    skip?: number
    distinct?: List_certificateScalarFieldEnum | List_certificateScalarFieldEnum[]
  }


  /**
   * List_certificate create
   */
  export type List_certificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * The data needed to create a List_certificate.
     */
    data: XOR<List_certificateCreateInput, List_certificateUncheckedCreateInput>
  }


  /**
   * List_certificate createMany
   */
  export type List_certificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many List_certificates.
     */
    data: List_certificateCreateManyInput | List_certificateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List_certificate update
   */
  export type List_certificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * The data needed to update a List_certificate.
     */
    data: XOR<List_certificateUpdateInput, List_certificateUncheckedUpdateInput>
    /**
     * Choose, which List_certificate to update.
     */
    where: List_certificateWhereUniqueInput
  }


  /**
   * List_certificate updateMany
   */
  export type List_certificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update List_certificates.
     */
    data: XOR<List_certificateUpdateManyMutationInput, List_certificateUncheckedUpdateManyInput>
    /**
     * Filter which List_certificates to update
     */
    where?: List_certificateWhereInput
  }


  /**
   * List_certificate upsert
   */
  export type List_certificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * The filter to search for the List_certificate to update in case it exists.
     */
    where: List_certificateWhereUniqueInput
    /**
     * In case the List_certificate found by the `where` argument doesn't exist, create a new List_certificate with this data.
     */
    create: XOR<List_certificateCreateInput, List_certificateUncheckedCreateInput>
    /**
     * In case the List_certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<List_certificateUpdateInput, List_certificateUncheckedUpdateInput>
  }


  /**
   * List_certificate delete
   */
  export type List_certificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
    /**
     * Filter which List_certificate to delete.
     */
    where: List_certificateWhereUniqueInput
  }


  /**
   * List_certificate deleteMany
   */
  export type List_certificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_certificates to delete
     */
    where?: List_certificateWhereInput
  }


  /**
   * List_certificate without action
   */
  export type List_certificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_certificate
     */
    select?: List_certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_certificateInclude<ExtArgs> | null
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
    list_skill?: boolean | Skill$list_skillArgs<ExtArgs>
    list_job_skill?: boolean | Skill$list_job_skillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_skill?: boolean | Skill$list_skillArgs<ExtArgs>
    list_job_skill?: boolean | Skill$list_job_skillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      list_skill: Prisma.$List_skillsPayload<ExtArgs>[]
      list_job_skill: Prisma.$List_job_skillPayload<ExtArgs>[]
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

    list_skill<T extends Skill$list_skillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$list_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    list_job_skill<T extends Skill$list_job_skillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$list_job_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Skill.list_skill
   */
  export type Skill$list_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    where?: List_skillsWhereInput
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    cursor?: List_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_skillsScalarFieldEnum | List_skillsScalarFieldEnum[]
  }


  /**
   * Skill.list_job_skill
   */
  export type Skill$list_job_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    where?: List_job_skillWhereInput
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    cursor?: List_job_skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_job_skillScalarFieldEnum | List_job_skillScalarFieldEnum[]
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
   * Model List_disability
   */

  export type AggregateList_disability = {
    _count: List_disabilityCountAggregateOutputType | null
    _avg: List_disabilityAvgAggregateOutputType | null
    _sum: List_disabilitySumAggregateOutputType | null
    _min: List_disabilityMinAggregateOutputType | null
    _max: List_disabilityMaxAggregateOutputType | null
  }

  export type List_disabilityAvgAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    disability_id: number | null
  }

  export type List_disabilitySumAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    disability_id: number | null
  }

  export type List_disabilityMinAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    disability_id: number | null
  }

  export type List_disabilityMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    disability_id: number | null
  }

  export type List_disabilityCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    disability_id: number
    _all: number
  }


  export type List_disabilityAvgAggregateInputType = {
    id?: true
    job_seeker_id?: true
    disability_id?: true
  }

  export type List_disabilitySumAggregateInputType = {
    id?: true
    job_seeker_id?: true
    disability_id?: true
  }

  export type List_disabilityMinAggregateInputType = {
    id?: true
    job_seeker_id?: true
    disability_id?: true
  }

  export type List_disabilityMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    disability_id?: true
  }

  export type List_disabilityCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    disability_id?: true
    _all?: true
  }

  export type List_disabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_disability to aggregate.
     */
    where?: List_disabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_disabilities to fetch.
     */
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: List_disabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned List_disabilities
    **/
    _count?: true | List_disabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_disabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_disabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_disabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_disabilityMaxAggregateInputType
  }

  export type GetList_disabilityAggregateType<T extends List_disabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateList_disability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_disability[P]>
      : GetScalarType<T[P], AggregateList_disability[P]>
  }




  export type List_disabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_disabilityWhereInput
    orderBy?: List_disabilityOrderByWithAggregationInput | List_disabilityOrderByWithAggregationInput[]
    by: List_disabilityScalarFieldEnum[] | List_disabilityScalarFieldEnum
    having?: List_disabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_disabilityCountAggregateInputType | true
    _avg?: List_disabilityAvgAggregateInputType
    _sum?: List_disabilitySumAggregateInputType
    _min?: List_disabilityMinAggregateInputType
    _max?: List_disabilityMaxAggregateInputType
  }

  export type List_disabilityGroupByOutputType = {
    id: number
    job_seeker_id: number
    disability_id: number
    _count: List_disabilityCountAggregateOutputType | null
    _avg: List_disabilityAvgAggregateOutputType | null
    _sum: List_disabilitySumAggregateOutputType | null
    _min: List_disabilityMinAggregateOutputType | null
    _max: List_disabilityMaxAggregateOutputType | null
  }

  type GetList_disabilityGroupByPayload<T extends List_disabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_disabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_disabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_disabilityGroupByOutputType[P]>
            : GetScalarType<T[P], List_disabilityGroupByOutputType[P]>
        }
      >
    >


  export type List_disabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_seeker_id?: boolean
    disability_id?: boolean
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list_disability"]>

  export type List_disabilitySelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    disability_id?: boolean
  }

  export type List_disabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
  }


  export type $List_disabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_disability"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
      disability: Prisma.$DisabilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      disability_id: number
    }, ExtArgs["result"]["list_disability"]>
    composites: {}
  }


  type List_disabilityGetPayload<S extends boolean | null | undefined | List_disabilityDefaultArgs> = $Result.GetResult<Prisma.$List_disabilityPayload, S>

  type List_disabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<List_disabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: List_disabilityCountAggregateInputType | true
    }

  export interface List_disabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List_disability'], meta: { name: 'List_disability' } }
    /**
     * Find zero or one List_disability that matches the filter.
     * @param {List_disabilityFindUniqueArgs} args - Arguments to find a List_disability
     * @example
     * // Get one List_disability
     * const list_disability = await prisma.list_disability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends List_disabilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityFindUniqueArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List_disability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {List_disabilityFindUniqueOrThrowArgs} args - Arguments to find a List_disability
     * @example
     * // Get one List_disability
     * const list_disability = await prisma.list_disability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends List_disabilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List_disability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityFindFirstArgs} args - Arguments to find a List_disability
     * @example
     * // Get one List_disability
     * const list_disability = await prisma.list_disability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends List_disabilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityFindFirstArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List_disability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityFindFirstOrThrowArgs} args - Arguments to find a List_disability
     * @example
     * // Get one List_disability
     * const list_disability = await prisma.list_disability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends List_disabilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more List_disabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_disabilities
     * const list_disabilities = await prisma.list_disability.findMany()
     * 
     * // Get first 10 List_disabilities
     * const list_disabilities = await prisma.list_disability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_disabilityWithIdOnly = await prisma.list_disability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends List_disabilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List_disability.
     * @param {List_disabilityCreateArgs} args - Arguments to create a List_disability.
     * @example
     * // Create one List_disability
     * const List_disability = await prisma.list_disability.create({
     *   data: {
     *     // ... data to create a List_disability
     *   }
     * })
     * 
    **/
    create<T extends List_disabilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityCreateArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many List_disabilities.
     *     @param {List_disabilityCreateManyArgs} args - Arguments to create many List_disabilities.
     *     @example
     *     // Create many List_disabilities
     *     const list_disability = await prisma.list_disability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends List_disabilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List_disability.
     * @param {List_disabilityDeleteArgs} args - Arguments to delete one List_disability.
     * @example
     * // Delete one List_disability
     * const List_disability = await prisma.list_disability.delete({
     *   where: {
     *     // ... filter to delete one List_disability
     *   }
     * })
     * 
    **/
    delete<T extends List_disabilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityDeleteArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List_disability.
     * @param {List_disabilityUpdateArgs} args - Arguments to update one List_disability.
     * @example
     * // Update one List_disability
     * const list_disability = await prisma.list_disability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends List_disabilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityUpdateArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more List_disabilities.
     * @param {List_disabilityDeleteManyArgs} args - Arguments to filter List_disabilities to delete.
     * @example
     * // Delete a few List_disabilities
     * const { count } = await prisma.list_disability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends List_disabilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_disabilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_disabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_disabilities
     * const list_disability = await prisma.list_disability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends List_disabilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List_disability.
     * @param {List_disabilityUpsertArgs} args - Arguments to update or create a List_disability.
     * @example
     * // Update or create a List_disability
     * const list_disability = await prisma.list_disability.upsert({
     *   create: {
     *     // ... data to create a List_disability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_disability we want to update
     *   }
     * })
    **/
    upsert<T extends List_disabilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, List_disabilityUpsertArgs<ExtArgs>>
    ): Prisma__List_disabilityClient<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of List_disabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityCountArgs} args - Arguments to filter List_disabilities to count.
     * @example
     * // Count the number of List_disabilities
     * const count = await prisma.list_disability.count({
     *   where: {
     *     // ... the filter for the List_disabilities we want to count
     *   }
     * })
    **/
    count<T extends List_disabilityCountArgs>(
      args?: Subset<T, List_disabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_disabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_disability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends List_disabilityAggregateArgs>(args: Subset<T, List_disabilityAggregateArgs>): Prisma.PrismaPromise<GetList_disabilityAggregateType<T>>

    /**
     * Group by List_disability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_disabilityGroupByArgs} args - Group by arguments.
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
      T extends List_disabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: List_disabilityGroupByArgs['orderBy'] }
        : { orderBy?: List_disabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, List_disabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_disabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List_disability model
   */
  readonly fields: List_disabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List_disability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__List_disabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends Job_seekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_seekerDefaultArgs<ExtArgs>>): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the List_disability model
   */ 
  interface List_disabilityFieldRefs {
    readonly id: FieldRef<"List_disability", 'Int'>
    readonly job_seeker_id: FieldRef<"List_disability", 'Int'>
    readonly disability_id: FieldRef<"List_disability", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * List_disability findUnique
   */
  export type List_disabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter, which List_disability to fetch.
     */
    where: List_disabilityWhereUniqueInput
  }


  /**
   * List_disability findUniqueOrThrow
   */
  export type List_disabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter, which List_disability to fetch.
     */
    where: List_disabilityWhereUniqueInput
  }


  /**
   * List_disability findFirst
   */
  export type List_disabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter, which List_disability to fetch.
     */
    where?: List_disabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_disabilities to fetch.
     */
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_disabilities.
     */
    cursor?: List_disabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_disabilities.
     */
    distinct?: List_disabilityScalarFieldEnum | List_disabilityScalarFieldEnum[]
  }


  /**
   * List_disability findFirstOrThrow
   */
  export type List_disabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter, which List_disability to fetch.
     */
    where?: List_disabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_disabilities to fetch.
     */
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_disabilities.
     */
    cursor?: List_disabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_disabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_disabilities.
     */
    distinct?: List_disabilityScalarFieldEnum | List_disabilityScalarFieldEnum[]
  }


  /**
   * List_disability findMany
   */
  export type List_disabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter, which List_disabilities to fetch.
     */
    where?: List_disabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_disabilities to fetch.
     */
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing List_disabilities.
     */
    cursor?: List_disabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_disabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_disabilities.
     */
    skip?: number
    distinct?: List_disabilityScalarFieldEnum | List_disabilityScalarFieldEnum[]
  }


  /**
   * List_disability create
   */
  export type List_disabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a List_disability.
     */
    data: XOR<List_disabilityCreateInput, List_disabilityUncheckedCreateInput>
  }


  /**
   * List_disability createMany
   */
  export type List_disabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many List_disabilities.
     */
    data: List_disabilityCreateManyInput | List_disabilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List_disability update
   */
  export type List_disabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a List_disability.
     */
    data: XOR<List_disabilityUpdateInput, List_disabilityUncheckedUpdateInput>
    /**
     * Choose, which List_disability to update.
     */
    where: List_disabilityWhereUniqueInput
  }


  /**
   * List_disability updateMany
   */
  export type List_disabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update List_disabilities.
     */
    data: XOR<List_disabilityUpdateManyMutationInput, List_disabilityUncheckedUpdateManyInput>
    /**
     * Filter which List_disabilities to update
     */
    where?: List_disabilityWhereInput
  }


  /**
   * List_disability upsert
   */
  export type List_disabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the List_disability to update in case it exists.
     */
    where: List_disabilityWhereUniqueInput
    /**
     * In case the List_disability found by the `where` argument doesn't exist, create a new List_disability with this data.
     */
    create: XOR<List_disabilityCreateInput, List_disabilityUncheckedCreateInput>
    /**
     * In case the List_disability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<List_disabilityUpdateInput, List_disabilityUncheckedUpdateInput>
  }


  /**
   * List_disability delete
   */
  export type List_disabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    /**
     * Filter which List_disability to delete.
     */
    where: List_disabilityWhereUniqueInput
  }


  /**
   * List_disability deleteMany
   */
  export type List_disabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_disabilities to delete
     */
    where?: List_disabilityWhereInput
  }


  /**
   * List_disability without action
   */
  export type List_disabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
  }



  /**
   * Model Job_application
   */

  export type AggregateJob_application = {
    _count: Job_applicationCountAggregateOutputType | null
    _avg: Job_applicationAvgAggregateOutputType | null
    _sum: Job_applicationSumAggregateOutputType | null
    _min: Job_applicationMinAggregateOutputType | null
    _max: Job_applicationMaxAggregateOutputType | null
  }

  export type Job_applicationAvgAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    job_id: number | null
    company_id: number | null
  }

  export type Job_applicationSumAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    job_id: number | null
    company_id: number | null
  }

  export type Job_applicationMinAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    job_id: number | null
    company_id: number | null
    status: string | null
  }

  export type Job_applicationMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    job_id: number | null
    company_id: number | null
    status: string | null
  }

  export type Job_applicationCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: number
    _all: number
  }


  export type Job_applicationAvgAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
  }

  export type Job_applicationSumAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
  }

  export type Job_applicationMinAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
    status?: true
  }

  export type Job_applicationMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
    status?: true
  }

  export type Job_applicationCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
    status?: true
    _all?: true
  }

  export type Job_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_application to aggregate.
     */
    where?: Job_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_applications to fetch.
     */
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_applications
    **/
    _count?: true | Job_applicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_applicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_applicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_applicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_applicationMaxAggregateInputType
  }

  export type GetJob_applicationAggregateType<T extends Job_applicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_application[P]>
      : GetScalarType<T[P], AggregateJob_application[P]>
  }




  export type Job_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
    orderBy?: Job_applicationOrderByWithAggregationInput | Job_applicationOrderByWithAggregationInput[]
    by: Job_applicationScalarFieldEnum[] | Job_applicationScalarFieldEnum
    having?: Job_applicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_applicationCountAggregateInputType | true
    _avg?: Job_applicationAvgAggregateInputType
    _sum?: Job_applicationSumAggregateInputType
    _min?: Job_applicationMinAggregateInputType
    _max?: Job_applicationMaxAggregateInputType
  }

  export type Job_applicationGroupByOutputType = {
    id: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: string
    _count: Job_applicationCountAggregateOutputType | null
    _avg: Job_applicationAvgAggregateOutputType | null
    _sum: Job_applicationSumAggregateOutputType | null
    _min: Job_applicationMinAggregateOutputType | null
    _max: Job_applicationMaxAggregateOutputType | null
  }

  type GetJob_applicationGroupByPayload<T extends Job_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_applicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>
            : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>
        }
      >
    >


  export type Job_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_seeker_id?: boolean
    job_id?: boolean
    company_id?: boolean
    status?: boolean
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_application"]>

  export type Job_applicationSelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    job_id?: boolean
    company_id?: boolean
    status?: boolean
  }

  export type Job_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }


  export type $Job_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_application"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
      job: Prisma.$JobsPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      job_id: number
      company_id: number
      status: string
    }, ExtArgs["result"]["job_application"]>
    composites: {}
  }


  type Job_applicationGetPayload<S extends boolean | null | undefined | Job_applicationDefaultArgs> = $Result.GetResult<Prisma.$Job_applicationPayload, S>

  type Job_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Job_applicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Job_applicationCountAggregateInputType | true
    }

  export interface Job_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_application'], meta: { name: 'Job_application' } }
    /**
     * Find zero or one Job_application that matches the filter.
     * @param {Job_applicationFindUniqueArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Job_applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationFindUniqueArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job_application that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Job_applicationFindUniqueOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Job_applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationFindFirstArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Job_applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationFindFirstArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationFindFirstOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Job_applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applications
     * const job_applications = await prisma.job_application.findMany()
     * 
     * // Get first 10 Job_applications
     * const job_applications = await prisma.job_application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_applicationWithIdOnly = await prisma.job_application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Job_applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job_application.
     * @param {Job_applicationCreateArgs} args - Arguments to create a Job_application.
     * @example
     * // Create one Job_application
     * const Job_application = await prisma.job_application.create({
     *   data: {
     *     // ... data to create a Job_application
     *   }
     * })
     * 
    **/
    create<T extends Job_applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationCreateArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Job_applications.
     *     @param {Job_applicationCreateManyArgs} args - Arguments to create many Job_applications.
     *     @example
     *     // Create many Job_applications
     *     const job_application = await prisma.job_application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Job_applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_application.
     * @param {Job_applicationDeleteArgs} args - Arguments to delete one Job_application.
     * @example
     * // Delete one Job_application
     * const Job_application = await prisma.job_application.delete({
     *   where: {
     *     // ... filter to delete one Job_application
     *   }
     * })
     * 
    **/
    delete<T extends Job_applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationDeleteArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job_application.
     * @param {Job_applicationUpdateArgs} args - Arguments to update one Job_application.
     * @example
     * // Update one Job_application
     * const job_application = await prisma.job_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Job_applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationUpdateArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Job_applications.
     * @param {Job_applicationDeleteManyArgs} args - Arguments to filter Job_applications to delete.
     * @example
     * // Delete a few Job_applications
     * const { count } = await prisma.job_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Job_applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_applicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applications
     * const job_application = await prisma.job_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Job_applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_application.
     * @param {Job_applicationUpsertArgs} args - Arguments to update or create a Job_application.
     * @example
     * // Update or create a Job_application
     * const job_application = await prisma.job_application.upsert({
     *   create: {
     *     // ... data to create a Job_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_application we want to update
     *   }
     * })
    **/
    upsert<T extends Job_applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Job_applicationUpsertArgs<ExtArgs>>
    ): Prisma__Job_applicationClient<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationCountArgs} args - Arguments to filter Job_applications to count.
     * @example
     * // Count the number of Job_applications
     * const count = await prisma.job_application.count({
     *   where: {
     *     // ... the filter for the Job_applications we want to count
     *   }
     * })
    **/
    count<T extends Job_applicationCountArgs>(
      args?: Subset<T, Job_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_applicationAggregateArgs>(args: Subset<T, Job_applicationAggregateArgs>): Prisma.PrismaPromise<GetJob_applicationAggregateType<T>>

    /**
     * Group by Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationGroupByArgs} args - Group by arguments.
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
      T extends Job_applicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_applicationGroupByArgs['orderBy'] }
        : { orderBy?: Job_applicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Job_applicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_application model
   */
  readonly fields: Job_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_applicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends Job_seekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_seekerDefaultArgs<ExtArgs>>): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Job_application model
   */ 
  interface Job_applicationFieldRefs {
    readonly id: FieldRef<"Job_application", 'Int'>
    readonly job_seeker_id: FieldRef<"Job_application", 'Int'>
    readonly job_id: FieldRef<"Job_application", 'Int'>
    readonly company_id: FieldRef<"Job_application", 'Int'>
    readonly status: FieldRef<"Job_application", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Job_application findUnique
   */
  export type Job_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter, which Job_application to fetch.
     */
    where: Job_applicationWhereUniqueInput
  }


  /**
   * Job_application findUniqueOrThrow
   */
  export type Job_applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter, which Job_application to fetch.
     */
    where: Job_applicationWhereUniqueInput
  }


  /**
   * Job_application findFirst
   */
  export type Job_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter, which Job_application to fetch.
     */
    where?: Job_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_applications to fetch.
     */
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_applications.
     */
    cursor?: Job_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_applications.
     */
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
  }


  /**
   * Job_application findFirstOrThrow
   */
  export type Job_applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter, which Job_application to fetch.
     */
    where?: Job_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_applications to fetch.
     */
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_applications.
     */
    cursor?: Job_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_applications.
     */
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
  }


  /**
   * Job_application findMany
   */
  export type Job_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter, which Job_applications to fetch.
     */
    where?: Job_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_applications to fetch.
     */
    orderBy?: Job_applicationOrderByWithRelationInput | Job_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_applications.
     */
    cursor?: Job_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_applications.
     */
    skip?: number
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[]
  }


  /**
   * Job_application create
   */
  export type Job_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Job_application.
     */
    data: XOR<Job_applicationCreateInput, Job_applicationUncheckedCreateInput>
  }


  /**
   * Job_application createMany
   */
  export type Job_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_applications.
     */
    data: Job_applicationCreateManyInput | Job_applicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job_application update
   */
  export type Job_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Job_application.
     */
    data: XOR<Job_applicationUpdateInput, Job_applicationUncheckedUpdateInput>
    /**
     * Choose, which Job_application to update.
     */
    where: Job_applicationWhereUniqueInput
  }


  /**
   * Job_application updateMany
   */
  export type Job_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_applications.
     */
    data: XOR<Job_applicationUpdateManyMutationInput, Job_applicationUncheckedUpdateManyInput>
    /**
     * Filter which Job_applications to update
     */
    where?: Job_applicationWhereInput
  }


  /**
   * Job_application upsert
   */
  export type Job_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Job_application to update in case it exists.
     */
    where: Job_applicationWhereUniqueInput
    /**
     * In case the Job_application found by the `where` argument doesn't exist, create a new Job_application with this data.
     */
    create: XOR<Job_applicationCreateInput, Job_applicationUncheckedCreateInput>
    /**
     * In case the Job_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_applicationUpdateInput, Job_applicationUncheckedUpdateInput>
  }


  /**
   * Job_application delete
   */
  export type Job_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
    /**
     * Filter which Job_application to delete.
     */
    where: Job_applicationWhereUniqueInput
  }


  /**
   * Job_application deleteMany
   */
  export type Job_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_applications to delete
     */
    where?: Job_applicationWhereInput
  }


  /**
   * Job_application without action
   */
  export type Job_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_application
     */
    select?: Job_applicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_applicationInclude<ExtArgs> | null
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
  }

  export type DisabilityMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
  }

  export type DisabilityCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
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
  }

  export type DisabilityMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
  }

  export type DisabilityCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
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
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    list_disabilities?: boolean | Disability$list_disabilitiesArgs<ExtArgs>
    _count?: boolean | DisabilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disability"]>

  export type DisabilitySelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
  }

  export type DisabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    list_disabilities?: boolean | Disability$list_disabilitiesArgs<ExtArgs>
    _count?: boolean | DisabilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DisabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disability"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      list_disabilities: Prisma.$List_disabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number
      name: string
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

    list_disabilities<T extends Disability$list_disabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Disability$list_disabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Disability.list_disabilities
   */
  export type Disability$list_disabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_disability
     */
    select?: List_disabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_disabilityInclude<ExtArgs> | null
    where?: List_disabilityWhereInput
    orderBy?: List_disabilityOrderByWithRelationInput | List_disabilityOrderByWithRelationInput[]
    cursor?: List_disabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_disabilityScalarFieldEnum | List_disabilityScalarFieldEnum[]
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
      jobs: Prisma.$JobsPayload<ExtArgs>[]
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

    jobs<T extends Ability$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Ability$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    cursor?: JobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
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
   * Model List_skills
   */

  export type AggregateList_skills = {
    _count: List_skillsCountAggregateOutputType | null
    _avg: List_skillsAvgAggregateOutputType | null
    _sum: List_skillsSumAggregateOutputType | null
    _min: List_skillsMinAggregateOutputType | null
    _max: List_skillsMaxAggregateOutputType | null
  }

  export type List_skillsAvgAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skillId: number | null
  }

  export type List_skillsSumAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skillId: number | null
  }

  export type List_skillsMinAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skillId: number | null
  }

  export type List_skillsMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skillId: number | null
  }

  export type List_skillsCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    skillId: number
    _all: number
  }


  export type List_skillsAvgAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skillId?: true
  }

  export type List_skillsSumAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skillId?: true
  }

  export type List_skillsMinAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skillId?: true
  }

  export type List_skillsMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skillId?: true
  }

  export type List_skillsCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skillId?: true
    _all?: true
  }

  export type List_skillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_skills to aggregate.
     */
    where?: List_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_skills to fetch.
     */
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: List_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned List_skills
    **/
    _count?: true | List_skillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_skillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_skillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_skillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_skillsMaxAggregateInputType
  }

  export type GetList_skillsAggregateType<T extends List_skillsAggregateArgs> = {
        [P in keyof T & keyof AggregateList_skills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_skills[P]>
      : GetScalarType<T[P], AggregateList_skills[P]>
  }




  export type List_skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_skillsWhereInput
    orderBy?: List_skillsOrderByWithAggregationInput | List_skillsOrderByWithAggregationInput[]
    by: List_skillsScalarFieldEnum[] | List_skillsScalarFieldEnum
    having?: List_skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_skillsCountAggregateInputType | true
    _avg?: List_skillsAvgAggregateInputType
    _sum?: List_skillsSumAggregateInputType
    _min?: List_skillsMinAggregateInputType
    _max?: List_skillsMaxAggregateInputType
  }

  export type List_skillsGroupByOutputType = {
    id: number
    job_seeker_id: number
    skillId: number
    _count: List_skillsCountAggregateOutputType | null
    _avg: List_skillsAvgAggregateOutputType | null
    _sum: List_skillsSumAggregateOutputType | null
    _min: List_skillsMinAggregateOutputType | null
    _max: List_skillsMaxAggregateOutputType | null
  }

  type GetList_skillsGroupByPayload<T extends List_skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_skillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_skillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_skillsGroupByOutputType[P]>
            : GetScalarType<T[P], List_skillsGroupByOutputType[P]>
        }
      >
    >


  export type List_skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_seeker_id?: boolean
    skillId?: boolean
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list_skills"]>

  export type List_skillsSelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    skillId?: boolean
  }

  export type List_skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }


  export type $List_skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_skills"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      skillId: number
    }, ExtArgs["result"]["list_skills"]>
    composites: {}
  }


  type List_skillsGetPayload<S extends boolean | null | undefined | List_skillsDefaultArgs> = $Result.GetResult<Prisma.$List_skillsPayload, S>

  type List_skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<List_skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: List_skillsCountAggregateInputType | true
    }

  export interface List_skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List_skills'], meta: { name: 'List_skills' } }
    /**
     * Find zero or one List_skills that matches the filter.
     * @param {List_skillsFindUniqueArgs} args - Arguments to find a List_skills
     * @example
     * // Get one List_skills
     * const list_skills = await prisma.list_skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends List_skillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsFindUniqueArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List_skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {List_skillsFindUniqueOrThrowArgs} args - Arguments to find a List_skills
     * @example
     * // Get one List_skills
     * const list_skills = await prisma.list_skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends List_skillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsFindFirstArgs} args - Arguments to find a List_skills
     * @example
     * // Get one List_skills
     * const list_skills = await prisma.list_skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends List_skillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsFindFirstArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List_skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsFindFirstOrThrowArgs} args - Arguments to find a List_skills
     * @example
     * // Get one List_skills
     * const list_skills = await prisma.list_skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends List_skillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more List_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_skills
     * const list_skills = await prisma.list_skills.findMany()
     * 
     * // Get first 10 List_skills
     * const list_skills = await prisma.list_skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_skillsWithIdOnly = await prisma.list_skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends List_skillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List_skills.
     * @param {List_skillsCreateArgs} args - Arguments to create a List_skills.
     * @example
     * // Create one List_skills
     * const List_skills = await prisma.list_skills.create({
     *   data: {
     *     // ... data to create a List_skills
     *   }
     * })
     * 
    **/
    create<T extends List_skillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsCreateArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many List_skills.
     *     @param {List_skillsCreateManyArgs} args - Arguments to create many List_skills.
     *     @example
     *     // Create many List_skills
     *     const list_skills = await prisma.list_skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends List_skillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List_skills.
     * @param {List_skillsDeleteArgs} args - Arguments to delete one List_skills.
     * @example
     * // Delete one List_skills
     * const List_skills = await prisma.list_skills.delete({
     *   where: {
     *     // ... filter to delete one List_skills
     *   }
     * })
     * 
    **/
    delete<T extends List_skillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsDeleteArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List_skills.
     * @param {List_skillsUpdateArgs} args - Arguments to update one List_skills.
     * @example
     * // Update one List_skills
     * const list_skills = await prisma.list_skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends List_skillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsUpdateArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more List_skills.
     * @param {List_skillsDeleteManyArgs} args - Arguments to filter List_skills to delete.
     * @example
     * // Delete a few List_skills
     * const { count } = await prisma.list_skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends List_skillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_skillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_skills
     * const list_skills = await prisma.list_skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends List_skillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List_skills.
     * @param {List_skillsUpsertArgs} args - Arguments to update or create a List_skills.
     * @example
     * // Update or create a List_skills
     * const list_skills = await prisma.list_skills.upsert({
     *   create: {
     *     // ... data to create a List_skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_skills we want to update
     *   }
     * })
    **/
    upsert<T extends List_skillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, List_skillsUpsertArgs<ExtArgs>>
    ): Prisma__List_skillsClient<$Result.GetResult<Prisma.$List_skillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of List_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsCountArgs} args - Arguments to filter List_skills to count.
     * @example
     * // Count the number of List_skills
     * const count = await prisma.list_skills.count({
     *   where: {
     *     // ... the filter for the List_skills we want to count
     *   }
     * })
    **/
    count<T extends List_skillsCountArgs>(
      args?: Subset<T, List_skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_skillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends List_skillsAggregateArgs>(args: Subset<T, List_skillsAggregateArgs>): Prisma.PrismaPromise<GetList_skillsAggregateType<T>>

    /**
     * Group by List_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_skillsGroupByArgs} args - Group by arguments.
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
      T extends List_skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: List_skillsGroupByArgs['orderBy'] }
        : { orderBy?: List_skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, List_skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_skillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List_skills model
   */
  readonly fields: List_skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List_skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__List_skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends Job_seekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_seekerDefaultArgs<ExtArgs>>): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the List_skills model
   */ 
  interface List_skillsFieldRefs {
    readonly id: FieldRef<"List_skills", 'Int'>
    readonly job_seeker_id: FieldRef<"List_skills", 'Int'>
    readonly skillId: FieldRef<"List_skills", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * List_skills findUnique
   */
  export type List_skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter, which List_skills to fetch.
     */
    where: List_skillsWhereUniqueInput
  }


  /**
   * List_skills findUniqueOrThrow
   */
  export type List_skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter, which List_skills to fetch.
     */
    where: List_skillsWhereUniqueInput
  }


  /**
   * List_skills findFirst
   */
  export type List_skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter, which List_skills to fetch.
     */
    where?: List_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_skills to fetch.
     */
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_skills.
     */
    cursor?: List_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_skills.
     */
    distinct?: List_skillsScalarFieldEnum | List_skillsScalarFieldEnum[]
  }


  /**
   * List_skills findFirstOrThrow
   */
  export type List_skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter, which List_skills to fetch.
     */
    where?: List_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_skills to fetch.
     */
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_skills.
     */
    cursor?: List_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_skills.
     */
    distinct?: List_skillsScalarFieldEnum | List_skillsScalarFieldEnum[]
  }


  /**
   * List_skills findMany
   */
  export type List_skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter, which List_skills to fetch.
     */
    where?: List_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_skills to fetch.
     */
    orderBy?: List_skillsOrderByWithRelationInput | List_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing List_skills.
     */
    cursor?: List_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_skills.
     */
    skip?: number
    distinct?: List_skillsScalarFieldEnum | List_skillsScalarFieldEnum[]
  }


  /**
   * List_skills create
   */
  export type List_skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a List_skills.
     */
    data: XOR<List_skillsCreateInput, List_skillsUncheckedCreateInput>
  }


  /**
   * List_skills createMany
   */
  export type List_skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many List_skills.
     */
    data: List_skillsCreateManyInput | List_skillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List_skills update
   */
  export type List_skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a List_skills.
     */
    data: XOR<List_skillsUpdateInput, List_skillsUncheckedUpdateInput>
    /**
     * Choose, which List_skills to update.
     */
    where: List_skillsWhereUniqueInput
  }


  /**
   * List_skills updateMany
   */
  export type List_skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update List_skills.
     */
    data: XOR<List_skillsUpdateManyMutationInput, List_skillsUncheckedUpdateManyInput>
    /**
     * Filter which List_skills to update
     */
    where?: List_skillsWhereInput
  }


  /**
   * List_skills upsert
   */
  export type List_skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the List_skills to update in case it exists.
     */
    where: List_skillsWhereUniqueInput
    /**
     * In case the List_skills found by the `where` argument doesn't exist, create a new List_skills with this data.
     */
    create: XOR<List_skillsCreateInput, List_skillsUncheckedCreateInput>
    /**
     * In case the List_skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<List_skillsUpdateInput, List_skillsUncheckedUpdateInput>
  }


  /**
   * List_skills delete
   */
  export type List_skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
    /**
     * Filter which List_skills to delete.
     */
    where: List_skillsWhereUniqueInput
  }


  /**
   * List_skills deleteMany
   */
  export type List_skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_skills to delete
     */
    where?: List_skillsWhereInput
  }


  /**
   * List_skills without action
   */
  export type List_skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_skills
     */
    select?: List_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_skillsInclude<ExtArgs> | null
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
   * Model List_job_skill
   */

  export type AggregateList_job_skill = {
    _count: List_job_skillCountAggregateOutputType | null
    _avg: List_job_skillAvgAggregateOutputType | null
    _sum: List_job_skillSumAggregateOutputType | null
    _min: List_job_skillMinAggregateOutputType | null
    _max: List_job_skillMaxAggregateOutputType | null
  }

  export type List_job_skillAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type List_job_skillSumAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type List_job_skillMinAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type List_job_skillMaxAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type List_job_skillCountAggregateOutputType = {
    id: number
    job_id: number
    skill_id: number
    _all: number
  }


  export type List_job_skillAvgAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type List_job_skillSumAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type List_job_skillMinAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type List_job_skillMaxAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type List_job_skillCountAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
    _all?: true
  }

  export type List_job_skillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_job_skill to aggregate.
     */
    where?: List_job_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_job_skills to fetch.
     */
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: List_job_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_job_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_job_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned List_job_skills
    **/
    _count?: true | List_job_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_job_skillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_job_skillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_job_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_job_skillMaxAggregateInputType
  }

  export type GetList_job_skillAggregateType<T extends List_job_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateList_job_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_job_skill[P]>
      : GetScalarType<T[P], AggregateList_job_skill[P]>
  }




  export type List_job_skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_job_skillWhereInput
    orderBy?: List_job_skillOrderByWithAggregationInput | List_job_skillOrderByWithAggregationInput[]
    by: List_job_skillScalarFieldEnum[] | List_job_skillScalarFieldEnum
    having?: List_job_skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_job_skillCountAggregateInputType | true
    _avg?: List_job_skillAvgAggregateInputType
    _sum?: List_job_skillSumAggregateInputType
    _min?: List_job_skillMinAggregateInputType
    _max?: List_job_skillMaxAggregateInputType
  }

  export type List_job_skillGroupByOutputType = {
    id: number
    job_id: number
    skill_id: number
    _count: List_job_skillCountAggregateOutputType | null
    _avg: List_job_skillAvgAggregateOutputType | null
    _sum: List_job_skillSumAggregateOutputType | null
    _min: List_job_skillMinAggregateOutputType | null
    _max: List_job_skillMaxAggregateOutputType | null
  }

  type GetList_job_skillGroupByPayload<T extends List_job_skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_job_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_job_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_job_skillGroupByOutputType[P]>
            : GetScalarType<T[P], List_job_skillGroupByOutputType[P]>
        }
      >
    >


  export type List_job_skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list_job_skill"]>

  export type List_job_skillSelectScalar = {
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
  }

  export type List_job_skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobsDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }


  export type $List_job_skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_job_skill"
    objects: {
      job: Prisma.$JobsPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_id: number
      skill_id: number
    }, ExtArgs["result"]["list_job_skill"]>
    composites: {}
  }


  type List_job_skillGetPayload<S extends boolean | null | undefined | List_job_skillDefaultArgs> = $Result.GetResult<Prisma.$List_job_skillPayload, S>

  type List_job_skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<List_job_skillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: List_job_skillCountAggregateInputType | true
    }

  export interface List_job_skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List_job_skill'], meta: { name: 'List_job_skill' } }
    /**
     * Find zero or one List_job_skill that matches the filter.
     * @param {List_job_skillFindUniqueArgs} args - Arguments to find a List_job_skill
     * @example
     * // Get one List_job_skill
     * const list_job_skill = await prisma.list_job_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends List_job_skillFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillFindUniqueArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List_job_skill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {List_job_skillFindUniqueOrThrowArgs} args - Arguments to find a List_job_skill
     * @example
     * // Get one List_job_skill
     * const list_job_skill = await prisma.list_job_skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends List_job_skillFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List_job_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillFindFirstArgs} args - Arguments to find a List_job_skill
     * @example
     * // Get one List_job_skill
     * const list_job_skill = await prisma.list_job_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends List_job_skillFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillFindFirstArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List_job_skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillFindFirstOrThrowArgs} args - Arguments to find a List_job_skill
     * @example
     * // Get one List_job_skill
     * const list_job_skill = await prisma.list_job_skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends List_job_skillFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more List_job_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_job_skills
     * const list_job_skills = await prisma.list_job_skill.findMany()
     * 
     * // Get first 10 List_job_skills
     * const list_job_skills = await prisma.list_job_skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_job_skillWithIdOnly = await prisma.list_job_skill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends List_job_skillFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List_job_skill.
     * @param {List_job_skillCreateArgs} args - Arguments to create a List_job_skill.
     * @example
     * // Create one List_job_skill
     * const List_job_skill = await prisma.list_job_skill.create({
     *   data: {
     *     // ... data to create a List_job_skill
     *   }
     * })
     * 
    **/
    create<T extends List_job_skillCreateArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillCreateArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many List_job_skills.
     *     @param {List_job_skillCreateManyArgs} args - Arguments to create many List_job_skills.
     *     @example
     *     // Create many List_job_skills
     *     const list_job_skill = await prisma.list_job_skill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends List_job_skillCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List_job_skill.
     * @param {List_job_skillDeleteArgs} args - Arguments to delete one List_job_skill.
     * @example
     * // Delete one List_job_skill
     * const List_job_skill = await prisma.list_job_skill.delete({
     *   where: {
     *     // ... filter to delete one List_job_skill
     *   }
     * })
     * 
    **/
    delete<T extends List_job_skillDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillDeleteArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List_job_skill.
     * @param {List_job_skillUpdateArgs} args - Arguments to update one List_job_skill.
     * @example
     * // Update one List_job_skill
     * const list_job_skill = await prisma.list_job_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends List_job_skillUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillUpdateArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more List_job_skills.
     * @param {List_job_skillDeleteManyArgs} args - Arguments to filter List_job_skills to delete.
     * @example
     * // Delete a few List_job_skills
     * const { count } = await prisma.list_job_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends List_job_skillDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_job_skillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_job_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_job_skills
     * const list_job_skill = await prisma.list_job_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends List_job_skillUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List_job_skill.
     * @param {List_job_skillUpsertArgs} args - Arguments to update or create a List_job_skill.
     * @example
     * // Update or create a List_job_skill
     * const list_job_skill = await prisma.list_job_skill.upsert({
     *   create: {
     *     // ... data to create a List_job_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_job_skill we want to update
     *   }
     * })
    **/
    upsert<T extends List_job_skillUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, List_job_skillUpsertArgs<ExtArgs>>
    ): Prisma__List_job_skillClient<$Result.GetResult<Prisma.$List_job_skillPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of List_job_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillCountArgs} args - Arguments to filter List_job_skills to count.
     * @example
     * // Count the number of List_job_skills
     * const count = await prisma.list_job_skill.count({
     *   where: {
     *     // ... the filter for the List_job_skills we want to count
     *   }
     * })
    **/
    count<T extends List_job_skillCountArgs>(
      args?: Subset<T, List_job_skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_job_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_job_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends List_job_skillAggregateArgs>(args: Subset<T, List_job_skillAggregateArgs>): Prisma.PrismaPromise<GetList_job_skillAggregateType<T>>

    /**
     * Group by List_job_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_job_skillGroupByArgs} args - Group by arguments.
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
      T extends List_job_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: List_job_skillGroupByArgs['orderBy'] }
        : { orderBy?: List_job_skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, List_job_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_job_skillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List_job_skill model
   */
  readonly fields: List_job_skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List_job_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__List_job_skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the List_job_skill model
   */ 
  interface List_job_skillFieldRefs {
    readonly id: FieldRef<"List_job_skill", 'Int'>
    readonly job_id: FieldRef<"List_job_skill", 'Int'>
    readonly skill_id: FieldRef<"List_job_skill", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * List_job_skill findUnique
   */
  export type List_job_skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter, which List_job_skill to fetch.
     */
    where: List_job_skillWhereUniqueInput
  }


  /**
   * List_job_skill findUniqueOrThrow
   */
  export type List_job_skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter, which List_job_skill to fetch.
     */
    where: List_job_skillWhereUniqueInput
  }


  /**
   * List_job_skill findFirst
   */
  export type List_job_skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter, which List_job_skill to fetch.
     */
    where?: List_job_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_job_skills to fetch.
     */
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_job_skills.
     */
    cursor?: List_job_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_job_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_job_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_job_skills.
     */
    distinct?: List_job_skillScalarFieldEnum | List_job_skillScalarFieldEnum[]
  }


  /**
   * List_job_skill findFirstOrThrow
   */
  export type List_job_skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter, which List_job_skill to fetch.
     */
    where?: List_job_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_job_skills to fetch.
     */
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_job_skills.
     */
    cursor?: List_job_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_job_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_job_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_job_skills.
     */
    distinct?: List_job_skillScalarFieldEnum | List_job_skillScalarFieldEnum[]
  }


  /**
   * List_job_skill findMany
   */
  export type List_job_skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter, which List_job_skills to fetch.
     */
    where?: List_job_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_job_skills to fetch.
     */
    orderBy?: List_job_skillOrderByWithRelationInput | List_job_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing List_job_skills.
     */
    cursor?: List_job_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_job_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_job_skills.
     */
    skip?: number
    distinct?: List_job_skillScalarFieldEnum | List_job_skillScalarFieldEnum[]
  }


  /**
   * List_job_skill create
   */
  export type List_job_skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * The data needed to create a List_job_skill.
     */
    data: XOR<List_job_skillCreateInput, List_job_skillUncheckedCreateInput>
  }


  /**
   * List_job_skill createMany
   */
  export type List_job_skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many List_job_skills.
     */
    data: List_job_skillCreateManyInput | List_job_skillCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List_job_skill update
   */
  export type List_job_skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * The data needed to update a List_job_skill.
     */
    data: XOR<List_job_skillUpdateInput, List_job_skillUncheckedUpdateInput>
    /**
     * Choose, which List_job_skill to update.
     */
    where: List_job_skillWhereUniqueInput
  }


  /**
   * List_job_skill updateMany
   */
  export type List_job_skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update List_job_skills.
     */
    data: XOR<List_job_skillUpdateManyMutationInput, List_job_skillUncheckedUpdateManyInput>
    /**
     * Filter which List_job_skills to update
     */
    where?: List_job_skillWhereInput
  }


  /**
   * List_job_skill upsert
   */
  export type List_job_skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * The filter to search for the List_job_skill to update in case it exists.
     */
    where: List_job_skillWhereUniqueInput
    /**
     * In case the List_job_skill found by the `where` argument doesn't exist, create a new List_job_skill with this data.
     */
    create: XOR<List_job_skillCreateInput, List_job_skillUncheckedCreateInput>
    /**
     * In case the List_job_skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<List_job_skillUpdateInput, List_job_skillUncheckedUpdateInput>
  }


  /**
   * List_job_skill delete
   */
  export type List_job_skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
    /**
     * Filter which List_job_skill to delete.
     */
    where: List_job_skillWhereUniqueInput
  }


  /**
   * List_job_skill deleteMany
   */
  export type List_job_skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_job_skills to delete
     */
    where?: List_job_skillWhereInput
  }


  /**
   * List_job_skill without action
   */
  export type List_job_skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_job_skill
     */
    select?: List_job_skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_job_skillInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role',
    is_verified: 'is_verified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Job_seekerScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    fullname: 'fullname',
    dob: 'dob',
    gender: 'gender',
    phone_number: 'phone_number',
    city: 'city'
  };

  export type Job_seekerScalarFieldEnum = (typeof Job_seekerScalarFieldEnum)[keyof typeof Job_seekerScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    city: 'city',
    about: 'about',
    logo: 'logo',
    picture: 'picture'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    title: 'title',
    description: 'description',
    employmentType: 'employmentType',
    estimateSalary: 'estimateSalary',
    ability_id: 'ability_id'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const List_certificateScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    name: 'name',
    description: 'description'
  };

  export type List_certificateScalarFieldEnum = (typeof List_certificateScalarFieldEnum)[keyof typeof List_certificateScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const List_disabilityScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    disability_id: 'disability_id'
  };

  export type List_disabilityScalarFieldEnum = (typeof List_disabilityScalarFieldEnum)[keyof typeof List_disabilityScalarFieldEnum]


  export const Job_applicationScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    job_id: 'job_id',
    company_id: 'company_id',
    status: 'status'
  };

  export type Job_applicationScalarFieldEnum = (typeof Job_applicationScalarFieldEnum)[keyof typeof Job_applicationScalarFieldEnum]


  export const DisabilityScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name'
  };

  export type DisabilityScalarFieldEnum = (typeof DisabilityScalarFieldEnum)[keyof typeof DisabilityScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const List_skillsScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    skillId: 'skillId'
  };

  export type List_skillsScalarFieldEnum = (typeof List_skillsScalarFieldEnum)[keyof typeof List_skillsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const List_job_skillScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    skill_id: 'skill_id'
  };

  export type List_job_skillScalarFieldEnum = (typeof List_job_skillScalarFieldEnum)[keyof typeof List_job_skillScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    job_seeker?: Job_seekerListRelationFilter
    company?: CompanyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    job_seeker?: Job_seekerOrderByRelationAggregateInput
    company?: CompanyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    job_seeker?: Job_seekerListRelationFilter
    company?: CompanyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type Job_seekerWhereInput = {
    AND?: Job_seekerWhereInput | Job_seekerWhereInput[]
    OR?: Job_seekerWhereInput[]
    NOT?: Job_seekerWhereInput | Job_seekerWhereInput[]
    id?: IntFilter<"Job_seeker"> | number
    user_id?: IntFilter<"Job_seeker"> | number
    fullname?: StringFilter<"Job_seeker"> | string
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    certificates?: List_certificateListRelationFilter
    disabilities?: List_disabilityListRelationFilter
    skills?: List_skillsListRelationFilter
    job_applications?: Job_applicationListRelationFilter
  }

  export type Job_seekerOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    certificates?: List_certificateOrderByRelationAggregateInput
    disabilities?: List_disabilityOrderByRelationAggregateInput
    skills?: List_skillsOrderByRelationAggregateInput
    job_applications?: Job_applicationOrderByRelationAggregateInput
  }

  export type Job_seekerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Job_seekerWhereInput | Job_seekerWhereInput[]
    OR?: Job_seekerWhereInput[]
    NOT?: Job_seekerWhereInput | Job_seekerWhereInput[]
    user_id?: IntFilter<"Job_seeker"> | number
    fullname?: StringFilter<"Job_seeker"> | string
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    certificates?: List_certificateListRelationFilter
    disabilities?: List_disabilityListRelationFilter
    skills?: List_skillsListRelationFilter
    job_applications?: Job_applicationListRelationFilter
  }, "id">

  export type Job_seekerOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: Job_seekerCountOrderByAggregateInput
    _avg?: Job_seekerAvgOrderByAggregateInput
    _max?: Job_seekerMaxOrderByAggregateInput
    _min?: Job_seekerMinOrderByAggregateInput
    _sum?: Job_seekerSumOrderByAggregateInput
  }

  export type Job_seekerScalarWhereWithAggregatesInput = {
    AND?: Job_seekerScalarWhereWithAggregatesInput | Job_seekerScalarWhereWithAggregatesInput[]
    OR?: Job_seekerScalarWhereWithAggregatesInput[]
    NOT?: Job_seekerScalarWhereWithAggregatesInput | Job_seekerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job_seeker"> | number
    user_id?: IntWithAggregatesFilter<"Job_seeker"> | number
    fullname?: StringWithAggregatesFilter<"Job_seeker"> | string
    dob?: DateTimeWithAggregatesFilter<"Job_seeker"> | Date | string
    gender?: StringWithAggregatesFilter<"Job_seeker"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Job_seeker"> | string | null
    city?: StringNullableWithAggregatesFilter<"Job_seeker"> | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    picture?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    jobs?: JobsListRelationFilter
    job_application?: Job_applicationListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobsOrderByRelationAggregateInput
    job_application?: Job_applicationOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    picture?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    jobs?: JobsListRelationFilter
    job_application?: Job_applicationListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
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
    user_id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    city?: StringWithAggregatesFilter<"Company"> | string
    about?: StringWithAggregatesFilter<"Company"> | string
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type JobsWhereInput = {
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    id?: IntFilter<"Jobs"> | number
    company_id?: IntFilter<"Jobs"> | number
    title?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    employmentType?: StringFilter<"Jobs"> | string
    estimateSalary?: IntNullableFilter<"Jobs"> | number | null
    ability_id?: IntNullableFilter<"Jobs"> | number | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
    jobSkills?: List_job_skillListRelationFilter
    jobApplications?: Job_applicationListRelationFilter
  }

  export type JobsOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    estimateSalary?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    ability?: AbilityOrderByWithRelationInput
    jobSkills?: List_job_skillOrderByRelationAggregateInput
    jobApplications?: Job_applicationOrderByRelationAggregateInput
  }

  export type JobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    company_id?: IntFilter<"Jobs"> | number
    title?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    employmentType?: StringFilter<"Jobs"> | string
    estimateSalary?: IntNullableFilter<"Jobs"> | number | null
    ability_id?: IntNullableFilter<"Jobs"> | number | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
    jobSkills?: List_job_skillListRelationFilter
    jobApplications?: Job_applicationListRelationFilter
  }, "id">

  export type JobsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    estimateSalary?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    _count?: JobsCountOrderByAggregateInput
    _avg?: JobsAvgOrderByAggregateInput
    _max?: JobsMaxOrderByAggregateInput
    _min?: JobsMinOrderByAggregateInput
    _sum?: JobsSumOrderByAggregateInput
  }

  export type JobsScalarWhereWithAggregatesInput = {
    AND?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    OR?: JobsScalarWhereWithAggregatesInput[]
    NOT?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jobs"> | number
    company_id?: IntWithAggregatesFilter<"Jobs"> | number
    title?: StringWithAggregatesFilter<"Jobs"> | string
    description?: StringWithAggregatesFilter<"Jobs"> | string
    employmentType?: StringWithAggregatesFilter<"Jobs"> | string
    estimateSalary?: IntNullableWithAggregatesFilter<"Jobs"> | number | null
    ability_id?: IntNullableWithAggregatesFilter<"Jobs"> | number | null
  }

  export type List_certificateWhereInput = {
    AND?: List_certificateWhereInput | List_certificateWhereInput[]
    OR?: List_certificateWhereInput[]
    NOT?: List_certificateWhereInput | List_certificateWhereInput[]
    id?: IntFilter<"List_certificate"> | number
    job_seeker_id?: IntFilter<"List_certificate"> | number
    name?: StringNullableFilter<"List_certificate"> | string | null
    description?: StringNullableFilter<"List_certificate"> | string | null
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
  }

  export type List_certificateOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    job_seeker?: Job_seekerOrderByWithRelationInput
  }

  export type List_certificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_certificateWhereInput | List_certificateWhereInput[]
    OR?: List_certificateWhereInput[]
    NOT?: List_certificateWhereInput | List_certificateWhereInput[]
    job_seeker_id?: IntFilter<"List_certificate"> | number
    name?: StringNullableFilter<"List_certificate"> | string | null
    description?: StringNullableFilter<"List_certificate"> | string | null
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
  }, "id">

  export type List_certificateOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: List_certificateCountOrderByAggregateInput
    _avg?: List_certificateAvgOrderByAggregateInput
    _max?: List_certificateMaxOrderByAggregateInput
    _min?: List_certificateMinOrderByAggregateInput
    _sum?: List_certificateSumOrderByAggregateInput
  }

  export type List_certificateScalarWhereWithAggregatesInput = {
    AND?: List_certificateScalarWhereWithAggregatesInput | List_certificateScalarWhereWithAggregatesInput[]
    OR?: List_certificateScalarWhereWithAggregatesInput[]
    NOT?: List_certificateScalarWhereWithAggregatesInput | List_certificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List_certificate"> | number
    job_seeker_id?: IntWithAggregatesFilter<"List_certificate"> | number
    name?: StringNullableWithAggregatesFilter<"List_certificate"> | string | null
    description?: StringNullableWithAggregatesFilter<"List_certificate"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    list_skill?: List_skillsListRelationFilter
    list_job_skill?: List_job_skillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    list_skill?: List_skillsOrderByRelationAggregateInput
    list_job_skill?: List_job_skillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    list_skill?: List_skillsListRelationFilter
    list_job_skill?: List_job_skillListRelationFilter
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

  export type List_disabilityWhereInput = {
    AND?: List_disabilityWhereInput | List_disabilityWhereInput[]
    OR?: List_disabilityWhereInput[]
    NOT?: List_disabilityWhereInput | List_disabilityWhereInput[]
    id?: IntFilter<"List_disability"> | number
    job_seeker_id?: IntFilter<"List_disability"> | number
    disability_id?: IntFilter<"List_disability"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
  }

  export type List_disabilityOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
    job_seeker?: Job_seekerOrderByWithRelationInput
    disability?: DisabilityOrderByWithRelationInput
  }

  export type List_disabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_disabilityWhereInput | List_disabilityWhereInput[]
    OR?: List_disabilityWhereInput[]
    NOT?: List_disabilityWhereInput | List_disabilityWhereInput[]
    job_seeker_id?: IntFilter<"List_disability"> | number
    disability_id?: IntFilter<"List_disability"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
  }, "id">

  export type List_disabilityOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
    _count?: List_disabilityCountOrderByAggregateInput
    _avg?: List_disabilityAvgOrderByAggregateInput
    _max?: List_disabilityMaxOrderByAggregateInput
    _min?: List_disabilityMinOrderByAggregateInput
    _sum?: List_disabilitySumOrderByAggregateInput
  }

  export type List_disabilityScalarWhereWithAggregatesInput = {
    AND?: List_disabilityScalarWhereWithAggregatesInput | List_disabilityScalarWhereWithAggregatesInput[]
    OR?: List_disabilityScalarWhereWithAggregatesInput[]
    NOT?: List_disabilityScalarWhereWithAggregatesInput | List_disabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List_disability"> | number
    job_seeker_id?: IntWithAggregatesFilter<"List_disability"> | number
    disability_id?: IntWithAggregatesFilter<"List_disability"> | number
  }

  export type Job_applicationWhereInput = {
    AND?: Job_applicationWhereInput | Job_applicationWhereInput[]
    OR?: Job_applicationWhereInput[]
    NOT?: Job_applicationWhereInput | Job_applicationWhereInput[]
    id?: IntFilter<"Job_application"> | number
    job_seeker_id?: IntFilter<"Job_application"> | number
    job_id?: IntFilter<"Job_application"> | number
    company_id?: IntFilter<"Job_application"> | number
    status?: StringFilter<"Job_application"> | string
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type Job_applicationOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    job_seeker?: Job_seekerOrderByWithRelationInput
    job?: JobsOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type Job_applicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Job_applicationWhereInput | Job_applicationWhereInput[]
    OR?: Job_applicationWhereInput[]
    NOT?: Job_applicationWhereInput | Job_applicationWhereInput[]
    job_seeker_id?: IntFilter<"Job_application"> | number
    job_id?: IntFilter<"Job_application"> | number
    company_id?: IntFilter<"Job_application"> | number
    status?: StringFilter<"Job_application"> | string
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type Job_applicationOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    _count?: Job_applicationCountOrderByAggregateInput
    _avg?: Job_applicationAvgOrderByAggregateInput
    _max?: Job_applicationMaxOrderByAggregateInput
    _min?: Job_applicationMinOrderByAggregateInput
    _sum?: Job_applicationSumOrderByAggregateInput
  }

  export type Job_applicationScalarWhereWithAggregatesInput = {
    AND?: Job_applicationScalarWhereWithAggregatesInput | Job_applicationScalarWhereWithAggregatesInput[]
    OR?: Job_applicationScalarWhereWithAggregatesInput[]
    NOT?: Job_applicationScalarWhereWithAggregatesInput | Job_applicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job_application"> | number
    job_seeker_id?: IntWithAggregatesFilter<"Job_application"> | number
    job_id?: IntWithAggregatesFilter<"Job_application"> | number
    company_id?: IntWithAggregatesFilter<"Job_application"> | number
    status?: StringWithAggregatesFilter<"Job_application"> | string
  }

  export type DisabilityWhereInput = {
    AND?: DisabilityWhereInput | DisabilityWhereInput[]
    OR?: DisabilityWhereInput[]
    NOT?: DisabilityWhereInput | DisabilityWhereInput[]
    id?: IntFilter<"Disability"> | number
    category_id?: IntFilter<"Disability"> | number
    name?: StringFilter<"Disability"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    list_disabilities?: List_disabilityListRelationFilter
  }

  export type DisabilityOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    category?: CategoryOrderByWithRelationInput
    list_disabilities?: List_disabilityOrderByRelationAggregateInput
  }

  export type DisabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisabilityWhereInput | DisabilityWhereInput[]
    OR?: DisabilityWhereInput[]
    NOT?: DisabilityWhereInput | DisabilityWhereInput[]
    category_id?: IntFilter<"Disability"> | number
    name?: StringFilter<"Disability"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    list_disabilities?: List_disabilityListRelationFilter
  }, "id">

  export type DisabilityOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
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
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    id?: IntFilter<"Ability"> | number
    name?: StringFilter<"Ability"> | string
    jobs?: JobsListRelationFilter
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    jobs?: JobsOrderByRelationAggregateInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    name?: StringFilter<"Ability"> | string
    jobs?: JobsListRelationFilter
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

  export type List_skillsWhereInput = {
    AND?: List_skillsWhereInput | List_skillsWhereInput[]
    OR?: List_skillsWhereInput[]
    NOT?: List_skillsWhereInput | List_skillsWhereInput[]
    id?: IntFilter<"List_skills"> | number
    job_seeker_id?: IntFilter<"List_skills"> | number
    skillId?: IntFilter<"List_skills"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type List_skillsOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
    job_seeker?: Job_seekerOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type List_skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_skillsWhereInput | List_skillsWhereInput[]
    OR?: List_skillsWhereInput[]
    NOT?: List_skillsWhereInput | List_skillsWhereInput[]
    job_seeker_id?: IntFilter<"List_skills"> | number
    skillId?: IntFilter<"List_skills"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "id">

  export type List_skillsOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
    _count?: List_skillsCountOrderByAggregateInput
    _avg?: List_skillsAvgOrderByAggregateInput
    _max?: List_skillsMaxOrderByAggregateInput
    _min?: List_skillsMinOrderByAggregateInput
    _sum?: List_skillsSumOrderByAggregateInput
  }

  export type List_skillsScalarWhereWithAggregatesInput = {
    AND?: List_skillsScalarWhereWithAggregatesInput | List_skillsScalarWhereWithAggregatesInput[]
    OR?: List_skillsScalarWhereWithAggregatesInput[]
    NOT?: List_skillsScalarWhereWithAggregatesInput | List_skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List_skills"> | number
    job_seeker_id?: IntWithAggregatesFilter<"List_skills"> | number
    skillId?: IntWithAggregatesFilter<"List_skills"> | number
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

  export type List_job_skillWhereInput = {
    AND?: List_job_skillWhereInput | List_job_skillWhereInput[]
    OR?: List_job_skillWhereInput[]
    NOT?: List_job_skillWhereInput | List_job_skillWhereInput[]
    id?: IntFilter<"List_job_skill"> | number
    job_id?: IntFilter<"List_job_skill"> | number
    skill_id?: IntFilter<"List_job_skill"> | number
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }

  export type List_job_skillOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    job?: JobsOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type List_job_skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_job_skillWhereInput | List_job_skillWhereInput[]
    OR?: List_job_skillWhereInput[]
    NOT?: List_job_skillWhereInput | List_job_skillWhereInput[]
    job_id?: IntFilter<"List_job_skill"> | number
    skill_id?: IntFilter<"List_job_skill"> | number
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
  }, "id">

  export type List_job_skillOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    _count?: List_job_skillCountOrderByAggregateInput
    _avg?: List_job_skillAvgOrderByAggregateInput
    _max?: List_job_skillMaxOrderByAggregateInput
    _min?: List_job_skillMinOrderByAggregateInput
    _sum?: List_job_skillSumOrderByAggregateInput
  }

  export type List_job_skillScalarWhereWithAggregatesInput = {
    AND?: List_job_skillScalarWhereWithAggregatesInput | List_job_skillScalarWhereWithAggregatesInput[]
    OR?: List_job_skillScalarWhereWithAggregatesInput[]
    NOT?: List_job_skillScalarWhereWithAggregatesInput | List_job_skillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List_job_skill"> | number
    job_id?: IntWithAggregatesFilter<"List_job_skill"> | number
    skill_id?: IntWithAggregatesFilter<"List_job_skill"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: string
    is_verified?: boolean
    job_seeker?: Job_seekerCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    is_verified?: boolean
    job_seeker?: Job_seekerUncheckedCreateNestedManyWithoutUserInput
    company?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    job_seeker?: Job_seekerUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    job_seeker?: Job_seekerUncheckedUpdateManyWithoutUserNestedInput
    company?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
    is_verified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Job_seekerCreateInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerCreateManyInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
  }

  export type Job_seekerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_seekerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    user: UserCreateNestedOneWithoutCompanyInput
    jobs?: JobsCreateNestedManyWithoutCompanyInput
    job_application?: Job_applicationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    jobs?: JobsUncheckedCreateNestedManyWithoutCompanyInput
    job_application?: Job_applicationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    jobs?: JobsUpdateManyWithoutCompanyNestedInput
    job_application?: Job_applicationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobsUncheckedUpdateManyWithoutCompanyNestedInput
    job_application?: Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    user_id: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobsCreateInput = {
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    jobSkills?: List_job_skillCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
    jobSkills?: List_job_skillUncheckedCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    jobSkills?: List_job_skillUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    jobSkills?: List_job_skillUncheckedUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsCreateManyInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
  }

  export type JobsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type List_certificateCreateInput = {
    name?: string | null
    description?: string | null
    job_seeker: Job_seekerCreateNestedOneWithoutCertificatesInput
  }

  export type List_certificateUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    name?: string | null
    description?: string | null
  }

  export type List_certificateUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_seeker?: Job_seekerUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type List_certificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_certificateCreateManyInput = {
    id?: number
    job_seeker_id: number
    name?: string | null
    description?: string | null
  }

  export type List_certificateUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_certificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    name: string
    list_skill?: List_skillsCreateNestedManyWithoutSkillInput
    list_job_skill?: List_job_skillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    list_skill?: List_skillsUncheckedCreateNestedManyWithoutSkillInput
    list_job_skill?: List_job_skillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    list_skill?: List_skillsUpdateManyWithoutSkillNestedInput
    list_job_skill?: List_job_skillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_skill?: List_skillsUncheckedUpdateManyWithoutSkillNestedInput
    list_job_skill?: List_job_skillUncheckedUpdateManyWithoutSkillNestedInput
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

  export type List_disabilityCreateInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutDisabilitiesInput
    disability: DisabilityCreateNestedOneWithoutList_disabilitiesInput
  }

  export type List_disabilityUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    disability_id: number
  }

  export type List_disabilityUpdateInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutDisabilitiesNestedInput
    disability?: DisabilityUpdateOneRequiredWithoutList_disabilitiesNestedInput
  }

  export type List_disabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_disabilityCreateManyInput = {
    id?: number
    job_seeker_id: number
    disability_id: number
  }

  export type List_disabilityUpdateManyMutationInput = {

  }

  export type List_disabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_applicationCreateInput = {
    status: string
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
    job: JobsCreateNestedOneWithoutJobApplicationsInput
    company: CompanyCreateNestedOneWithoutJob_applicationInput
  }

  export type Job_applicationUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: string
  }

  export type Job_applicationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
  }

  export type Job_applicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type Job_applicationCreateManyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: string
  }

  export type Job_applicationUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type Job_applicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DisabilityCreateInput = {
    name: string
    category: CategoryCreateNestedOneWithoutDisabilitiesInput
    list_disabilities?: List_disabilityCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUncheckedCreateInput = {
    id?: number
    category_id: number
    name: string
    list_disabilities?: List_disabilityUncheckedCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput
    list_disabilities?: List_disabilityUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_disabilities?: List_disabilityUncheckedUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityCreateManyInput = {
    id?: number
    category_id: number
    name: string
  }

  export type DisabilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DisabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityCreateInput = {
    name: string
    jobs?: JobsCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateInput = {
    id?: number
    name: string
    jobs?: JobsUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    jobs?: JobsUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    jobs?: JobsUncheckedUpdateManyWithoutAbilityNestedInput
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

  export type List_skillsCreateInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutList_skillInput
  }

  export type List_skillsUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    skillId: number
  }

  export type List_skillsUpdateInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutList_skillNestedInput
  }

  export type List_skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type List_skillsCreateManyInput = {
    id?: number
    job_seeker_id: number
    skillId: number
  }

  export type List_skillsUpdateManyMutationInput = {

  }

  export type List_skillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
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

  export type List_job_skillCreateInput = {
    job: JobsCreateNestedOneWithoutJobSkillsInput
    skill: SkillCreateNestedOneWithoutList_job_skillInput
  }

  export type List_job_skillUncheckedCreateInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type List_job_skillUpdateInput = {
    job?: JobsUpdateOneRequiredWithoutJobSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutList_job_skillNestedInput
  }

  export type List_job_skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_job_skillCreateManyInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type List_job_skillUpdateManyMutationInput = {

  }

  export type List_job_skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Job_seekerListRelationFilter = {
    every?: Job_seekerWhereInput
    some?: Job_seekerWhereInput
    none?: Job_seekerWhereInput
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type Job_seekerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type List_certificateListRelationFilter = {
    every?: List_certificateWhereInput
    some?: List_certificateWhereInput
    none?: List_certificateWhereInput
  }

  export type List_disabilityListRelationFilter = {
    every?: List_disabilityWhereInput
    some?: List_disabilityWhereInput
    none?: List_disabilityWhereInput
  }

  export type List_skillsListRelationFilter = {
    every?: List_skillsWhereInput
    some?: List_skillsWhereInput
    none?: List_skillsWhereInput
  }

  export type Job_applicationListRelationFilter = {
    every?: Job_applicationWhereInput
    some?: Job_applicationWhereInput
    none?: Job_applicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type List_certificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type List_disabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type List_skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_applicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_seekerCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type Job_seekerAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Job_seekerMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type Job_seekerMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type Job_seekerSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type JobsListRelationFilter = {
    every?: JobsWhereInput
    some?: JobsWhereInput
    none?: JobsWhereInput
  }

  export type JobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    picture?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type AbilityNullableRelationFilter = {
    is?: AbilityWhereInput | null
    isNot?: AbilityWhereInput | null
  }

  export type List_job_skillListRelationFilter = {
    every?: List_job_skillWhereInput
    some?: List_job_skillWhereInput
    none?: List_job_skillWhereInput
  }

  export type List_job_skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    estimateSalary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobsAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    estimateSalary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    estimateSalary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    estimateSalary?: SortOrder
    ability_id?: SortOrder
  }

  export type JobsSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    estimateSalary?: SortOrder
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

  export type Job_seekerRelationFilter = {
    is?: Job_seekerWhereInput
    isNot?: Job_seekerWhereInput
  }

  export type List_certificateCountOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type List_certificateAvgOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
  }

  export type List_certificateMaxOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type List_certificateMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type List_certificateSumOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
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

  export type List_disabilityCountOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
  }

  export type List_disabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
  }

  export type List_disabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
  }

  export type List_disabilityMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
  }

  export type List_disabilitySumOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
  }

  export type JobsRelationFilter = {
    is?: JobsWhereInput
    isNot?: JobsWhereInput
  }

  export type Job_applicationCountOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type Job_applicationAvgOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
  }

  export type Job_applicationMaxOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type Job_applicationMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
  }

  export type Job_applicationSumOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
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
  }

  export type DisabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type DisabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
  }

  export type DisabilityMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
  }

  export type DisabilitySumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
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

  export type List_skillsCountOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
  }

  export type List_skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
  }

  export type List_skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
  }

  export type List_skillsMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
  }

  export type List_skillsSumOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skillId?: SortOrder
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

  export type List_job_skillCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type List_job_skillAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type List_job_skillMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type List_job_skillMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type List_job_skillSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Job_seekerCreateNestedManyWithoutUserInput = {
    create?: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput> | Job_seekerCreateWithoutUserInput[] | Job_seekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_seekerCreateOrConnectWithoutUserInput | Job_seekerCreateOrConnectWithoutUserInput[]
    createMany?: Job_seekerCreateManyUserInputEnvelope
    connect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type Job_seekerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput> | Job_seekerCreateWithoutUserInput[] | Job_seekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_seekerCreateOrConnectWithoutUserInput | Job_seekerCreateOrConnectWithoutUserInput[]
    createMany?: Job_seekerCreateManyUserInputEnvelope
    connect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Job_seekerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput> | Job_seekerCreateWithoutUserInput[] | Job_seekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_seekerCreateOrConnectWithoutUserInput | Job_seekerCreateOrConnectWithoutUserInput[]
    upsert?: Job_seekerUpsertWithWhereUniqueWithoutUserInput | Job_seekerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Job_seekerCreateManyUserInputEnvelope
    set?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    disconnect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    delete?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    connect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    update?: Job_seekerUpdateWithWhereUniqueWithoutUserInput | Job_seekerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Job_seekerUpdateManyWithWhereWithoutUserInput | Job_seekerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Job_seekerScalarWhereInput | Job_seekerScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Job_seekerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput> | Job_seekerCreateWithoutUserInput[] | Job_seekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_seekerCreateOrConnectWithoutUserInput | Job_seekerCreateOrConnectWithoutUserInput[]
    upsert?: Job_seekerUpsertWithWhereUniqueWithoutUserInput | Job_seekerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Job_seekerCreateManyUserInputEnvelope
    set?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    disconnect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    delete?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    connect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
    update?: Job_seekerUpdateWithWhereUniqueWithoutUserInput | Job_seekerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Job_seekerUpdateManyWithWhereWithoutUserInput | Job_seekerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Job_seekerScalarWhereInput | Job_seekerScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJob_seekerInput = {
    create?: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_seekerInput
    connect?: UserWhereUniqueInput
  }

  export type List_certificateCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput> | List_certificateCreateWithoutJob_seekerInput[] | List_certificateUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_certificateCreateOrConnectWithoutJob_seekerInput | List_certificateCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_certificateCreateManyJob_seekerInputEnvelope
    connect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
  }

  export type List_disabilityCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput> | List_disabilityCreateWithoutJob_seekerInput[] | List_disabilityUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutJob_seekerInput | List_disabilityCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_disabilityCreateManyJob_seekerInputEnvelope
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
  }

  export type List_skillsCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput> | List_skillsCreateWithoutJob_seekerInput[] | List_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutJob_seekerInput | List_skillsCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_skillsCreateManyJob_seekerInputEnvelope
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
  }

  export type Job_applicationCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput> | List_certificateCreateWithoutJob_seekerInput[] | List_certificateUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_certificateCreateOrConnectWithoutJob_seekerInput | List_certificateCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_certificateCreateManyJob_seekerInputEnvelope
    connect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
  }

  export type List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput> | List_disabilityCreateWithoutJob_seekerInput[] | List_disabilityUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutJob_seekerInput | List_disabilityCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_disabilityCreateManyJob_seekerInputEnvelope
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
  }

  export type List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput> | List_skillsCreateWithoutJob_seekerInput[] | List_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutJob_seekerInput | List_skillsCreateOrConnectWithoutJob_seekerInput[]
    createMany?: List_skillsCreateManyJob_seekerInputEnvelope
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
  }

  export type Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutJob_seekerNestedInput = {
    create?: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_seekerInput
    upsert?: UserUpsertWithoutJob_seekerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJob_seekerInput, UserUpdateWithoutJob_seekerInput>, UserUncheckedUpdateWithoutJob_seekerInput>
  }

  export type List_certificateUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput> | List_certificateCreateWithoutJob_seekerInput[] | List_certificateUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_certificateCreateOrConnectWithoutJob_seekerInput | List_certificateCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_certificateUpsertWithWhereUniqueWithoutJob_seekerInput | List_certificateUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_certificateCreateManyJob_seekerInputEnvelope
    set?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    disconnect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    delete?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    connect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    update?: List_certificateUpdateWithWhereUniqueWithoutJob_seekerInput | List_certificateUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_certificateUpdateManyWithWhereWithoutJob_seekerInput | List_certificateUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_certificateScalarWhereInput | List_certificateScalarWhereInput[]
  }

  export type List_disabilityUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput> | List_disabilityCreateWithoutJob_seekerInput[] | List_disabilityUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutJob_seekerInput | List_disabilityCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_disabilityUpsertWithWhereUniqueWithoutJob_seekerInput | List_disabilityUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_disabilityCreateManyJob_seekerInputEnvelope
    set?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    disconnect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    delete?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    update?: List_disabilityUpdateWithWhereUniqueWithoutJob_seekerInput | List_disabilityUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_disabilityUpdateManyWithWhereWithoutJob_seekerInput | List_disabilityUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
  }

  export type List_skillsUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput> | List_skillsCreateWithoutJob_seekerInput[] | List_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutJob_seekerInput | List_skillsCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_skillsUpsertWithWhereUniqueWithoutJob_seekerInput | List_skillsUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_skillsCreateManyJob_seekerInputEnvelope
    set?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    disconnect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    delete?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    update?: List_skillsUpdateWithWhereUniqueWithoutJob_seekerInput | List_skillsUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_skillsUpdateManyWithWhereWithoutJob_seekerInput | List_skillsUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
  }

  export type Job_applicationUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutJob_seekerInput | Job_applicationUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutJob_seekerInput | Job_applicationUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutJob_seekerInput | Job_applicationUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
  }

  export type List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput> | List_certificateCreateWithoutJob_seekerInput[] | List_certificateUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_certificateCreateOrConnectWithoutJob_seekerInput | List_certificateCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_certificateUpsertWithWhereUniqueWithoutJob_seekerInput | List_certificateUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_certificateCreateManyJob_seekerInputEnvelope
    set?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    disconnect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    delete?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    connect?: List_certificateWhereUniqueInput | List_certificateWhereUniqueInput[]
    update?: List_certificateUpdateWithWhereUniqueWithoutJob_seekerInput | List_certificateUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_certificateUpdateManyWithWhereWithoutJob_seekerInput | List_certificateUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_certificateScalarWhereInput | List_certificateScalarWhereInput[]
  }

  export type List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput> | List_disabilityCreateWithoutJob_seekerInput[] | List_disabilityUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutJob_seekerInput | List_disabilityCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_disabilityUpsertWithWhereUniqueWithoutJob_seekerInput | List_disabilityUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_disabilityCreateManyJob_seekerInputEnvelope
    set?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    disconnect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    delete?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    update?: List_disabilityUpdateWithWhereUniqueWithoutJob_seekerInput | List_disabilityUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_disabilityUpdateManyWithWhereWithoutJob_seekerInput | List_disabilityUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
  }

  export type List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput> | List_skillsCreateWithoutJob_seekerInput[] | List_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutJob_seekerInput | List_skillsCreateOrConnectWithoutJob_seekerInput[]
    upsert?: List_skillsUpsertWithWhereUniqueWithoutJob_seekerInput | List_skillsUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: List_skillsCreateManyJob_seekerInputEnvelope
    set?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    disconnect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    delete?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    update?: List_skillsUpdateWithWhereUniqueWithoutJob_seekerInput | List_skillsUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: List_skillsUpdateManyWithWhereWithoutJob_seekerInput | List_skillsUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
  }

  export type Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutJob_seekerInput | Job_applicationUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutJob_seekerInput | Job_applicationUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutJob_seekerInput | Job_applicationUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type JobsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput> | JobsCreateWithoutCompanyInput[] | JobsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutCompanyInput | JobsCreateOrConnectWithoutCompanyInput[]
    createMany?: JobsCreateManyCompanyInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type Job_applicationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput> | Job_applicationCreateWithoutCompanyInput[] | Job_applicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutCompanyInput | Job_applicationCreateOrConnectWithoutCompanyInput[]
    createMany?: Job_applicationCreateManyCompanyInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type JobsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput> | JobsCreateWithoutCompanyInput[] | JobsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutCompanyInput | JobsCreateOrConnectWithoutCompanyInput[]
    createMany?: JobsCreateManyCompanyInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type Job_applicationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput> | Job_applicationCreateWithoutCompanyInput[] | Job_applicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutCompanyInput | Job_applicationCreateOrConnectWithoutCompanyInput[]
    createMany?: Job_applicationCreateManyCompanyInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type JobsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput> | JobsCreateWithoutCompanyInput[] | JobsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutCompanyInput | JobsCreateOrConnectWithoutCompanyInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutCompanyInput | JobsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobsCreateManyCompanyInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutCompanyInput | JobsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutCompanyInput | JobsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type Job_applicationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput> | Job_applicationCreateWithoutCompanyInput[] | Job_applicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutCompanyInput | Job_applicationCreateOrConnectWithoutCompanyInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutCompanyInput | Job_applicationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: Job_applicationCreateManyCompanyInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutCompanyInput | Job_applicationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutCompanyInput | Job_applicationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
  }

  export type JobsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput> | JobsCreateWithoutCompanyInput[] | JobsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutCompanyInput | JobsCreateOrConnectWithoutCompanyInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutCompanyInput | JobsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobsCreateManyCompanyInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutCompanyInput | JobsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutCompanyInput | JobsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput> | Job_applicationCreateWithoutCompanyInput[] | Job_applicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutCompanyInput | Job_applicationCreateOrConnectWithoutCompanyInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutCompanyInput | Job_applicationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: Job_applicationCreateManyCompanyInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutCompanyInput | Job_applicationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutCompanyInput | Job_applicationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
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

  export type List_job_skillCreateNestedManyWithoutJobInput = {
    create?: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput> | List_job_skillCreateWithoutJobInput[] | List_job_skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutJobInput | List_job_skillCreateOrConnectWithoutJobInput[]
    createMany?: List_job_skillCreateManyJobInputEnvelope
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
  }

  export type Job_applicationCreateNestedManyWithoutJobInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type List_job_skillUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput> | List_job_skillCreateWithoutJobInput[] | List_job_skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutJobInput | List_job_skillCreateOrConnectWithoutJobInput[]
    createMany?: List_job_skillCreateManyJobInputEnvelope
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
  }

  export type Job_applicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
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

  export type List_job_skillUpdateManyWithoutJobNestedInput = {
    create?: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput> | List_job_skillCreateWithoutJobInput[] | List_job_skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutJobInput | List_job_skillCreateOrConnectWithoutJobInput[]
    upsert?: List_job_skillUpsertWithWhereUniqueWithoutJobInput | List_job_skillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: List_job_skillCreateManyJobInputEnvelope
    set?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    disconnect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    delete?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    update?: List_job_skillUpdateWithWhereUniqueWithoutJobInput | List_job_skillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: List_job_skillUpdateManyWithWhereWithoutJobInput | List_job_skillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
  }

  export type Job_applicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutJobInput | Job_applicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutJobInput | Job_applicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutJobInput | Job_applicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
  }

  export type List_job_skillUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput> | List_job_skillCreateWithoutJobInput[] | List_job_skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutJobInput | List_job_skillCreateOrConnectWithoutJobInput[]
    upsert?: List_job_skillUpsertWithWhereUniqueWithoutJobInput | List_job_skillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: List_job_skillCreateManyJobInputEnvelope
    set?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    disconnect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    delete?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    update?: List_job_skillUpdateWithWhereUniqueWithoutJobInput | List_job_skillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: List_job_skillUpdateManyWithWhereWithoutJobInput | List_job_skillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
  }

  export type Job_applicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    upsert?: Job_applicationUpsertWithWhereUniqueWithoutJobInput | Job_applicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    set?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    disconnect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    delete?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
    update?: Job_applicationUpdateWithWhereUniqueWithoutJobInput | Job_applicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: Job_applicationUpdateManyWithWhereWithoutJobInput | Job_applicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
  }

  export type Job_seekerCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<Job_seekerCreateWithoutCertificatesInput, Job_seekerUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutCertificatesInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type Job_seekerUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<Job_seekerCreateWithoutCertificatesInput, Job_seekerUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutCertificatesInput
    upsert?: Job_seekerUpsertWithoutCertificatesInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutCertificatesInput, Job_seekerUpdateWithoutCertificatesInput>, Job_seekerUncheckedUpdateWithoutCertificatesInput>
  }

  export type List_skillsCreateNestedManyWithoutSkillInput = {
    create?: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput> | List_skillsCreateWithoutSkillInput[] | List_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutSkillInput | List_skillsCreateOrConnectWithoutSkillInput[]
    createMany?: List_skillsCreateManySkillInputEnvelope
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
  }

  export type List_job_skillCreateNestedManyWithoutSkillInput = {
    create?: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput> | List_job_skillCreateWithoutSkillInput[] | List_job_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutSkillInput | List_job_skillCreateOrConnectWithoutSkillInput[]
    createMany?: List_job_skillCreateManySkillInputEnvelope
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
  }

  export type List_skillsUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput> | List_skillsCreateWithoutSkillInput[] | List_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutSkillInput | List_skillsCreateOrConnectWithoutSkillInput[]
    createMany?: List_skillsCreateManySkillInputEnvelope
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
  }

  export type List_job_skillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput> | List_job_skillCreateWithoutSkillInput[] | List_job_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutSkillInput | List_job_skillCreateOrConnectWithoutSkillInput[]
    createMany?: List_job_skillCreateManySkillInputEnvelope
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
  }

  export type List_skillsUpdateManyWithoutSkillNestedInput = {
    create?: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput> | List_skillsCreateWithoutSkillInput[] | List_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutSkillInput | List_skillsCreateOrConnectWithoutSkillInput[]
    upsert?: List_skillsUpsertWithWhereUniqueWithoutSkillInput | List_skillsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: List_skillsCreateManySkillInputEnvelope
    set?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    disconnect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    delete?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    update?: List_skillsUpdateWithWhereUniqueWithoutSkillInput | List_skillsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: List_skillsUpdateManyWithWhereWithoutSkillInput | List_skillsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
  }

  export type List_job_skillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput> | List_job_skillCreateWithoutSkillInput[] | List_job_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutSkillInput | List_job_skillCreateOrConnectWithoutSkillInput[]
    upsert?: List_job_skillUpsertWithWhereUniqueWithoutSkillInput | List_job_skillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: List_job_skillCreateManySkillInputEnvelope
    set?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    disconnect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    delete?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    update?: List_job_skillUpdateWithWhereUniqueWithoutSkillInput | List_job_skillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: List_job_skillUpdateManyWithWhereWithoutSkillInput | List_job_skillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
  }

  export type List_skillsUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput> | List_skillsCreateWithoutSkillInput[] | List_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_skillsCreateOrConnectWithoutSkillInput | List_skillsCreateOrConnectWithoutSkillInput[]
    upsert?: List_skillsUpsertWithWhereUniqueWithoutSkillInput | List_skillsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: List_skillsCreateManySkillInputEnvelope
    set?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    disconnect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    delete?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    connect?: List_skillsWhereUniqueInput | List_skillsWhereUniqueInput[]
    update?: List_skillsUpdateWithWhereUniqueWithoutSkillInput | List_skillsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: List_skillsUpdateManyWithWhereWithoutSkillInput | List_skillsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
  }

  export type List_job_skillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput> | List_job_skillCreateWithoutSkillInput[] | List_job_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: List_job_skillCreateOrConnectWithoutSkillInput | List_job_skillCreateOrConnectWithoutSkillInput[]
    upsert?: List_job_skillUpsertWithWhereUniqueWithoutSkillInput | List_job_skillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: List_job_skillCreateManySkillInputEnvelope
    set?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    disconnect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    delete?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    connect?: List_job_skillWhereUniqueInput | List_job_skillWhereUniqueInput[]
    update?: List_job_skillUpdateWithWhereUniqueWithoutSkillInput | List_job_skillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: List_job_skillUpdateManyWithWhereWithoutSkillInput | List_job_skillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
  }

  export type Job_seekerCreateNestedOneWithoutDisabilitiesInput = {
    create?: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutDisabilitiesInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type DisabilityCreateNestedOneWithoutList_disabilitiesInput = {
    create?: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutList_disabilitiesInput
    connect?: DisabilityWhereUniqueInput
  }

  export type Job_seekerUpdateOneRequiredWithoutDisabilitiesNestedInput = {
    create?: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutDisabilitiesInput
    upsert?: Job_seekerUpsertWithoutDisabilitiesInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutDisabilitiesInput, Job_seekerUpdateWithoutDisabilitiesInput>, Job_seekerUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type DisabilityUpdateOneRequiredWithoutList_disabilitiesNestedInput = {
    create?: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutList_disabilitiesInput
    upsert?: DisabilityUpsertWithoutList_disabilitiesInput
    connect?: DisabilityWhereUniqueInput
    update?: XOR<XOR<DisabilityUpdateToOneWithWhereWithoutList_disabilitiesInput, DisabilityUpdateWithoutList_disabilitiesInput>, DisabilityUncheckedUpdateWithoutList_disabilitiesInput>
  }

  export type Job_seekerCreateNestedOneWithoutJob_applicationsInput = {
    create?: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_applicationsInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobApplicationsInput
    connect?: JobsWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJob_applicationInput
    connect?: CompanyWhereUniqueInput
  }

  export type Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput = {
    create?: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_applicationsInput
    upsert?: Job_seekerUpsertWithoutJob_applicationsInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutJob_applicationsInput, Job_seekerUpdateWithoutJob_applicationsInput>, Job_seekerUncheckedUpdateWithoutJob_applicationsInput>
  }

  export type JobsUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobApplicationsInput
    upsert?: JobsUpsertWithoutJobApplicationsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutJobApplicationsInput, JobsUpdateWithoutJobApplicationsInput>, JobsUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type CompanyUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJob_applicationInput
    upsert?: CompanyUpsertWithoutJob_applicationInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJob_applicationInput, CompanyUpdateWithoutJob_applicationInput>, CompanyUncheckedUpdateWithoutJob_applicationInput>
  }

  export type CategoryCreateNestedOneWithoutDisabilitiesInput = {
    create?: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDisabilitiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type List_disabilityCreateNestedManyWithoutDisabilityInput = {
    create?: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput> | List_disabilityCreateWithoutDisabilityInput[] | List_disabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutDisabilityInput | List_disabilityCreateOrConnectWithoutDisabilityInput[]
    createMany?: List_disabilityCreateManyDisabilityInputEnvelope
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
  }

  export type List_disabilityUncheckedCreateNestedManyWithoutDisabilityInput = {
    create?: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput> | List_disabilityCreateWithoutDisabilityInput[] | List_disabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutDisabilityInput | List_disabilityCreateOrConnectWithoutDisabilityInput[]
    createMany?: List_disabilityCreateManyDisabilityInputEnvelope
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput = {
    create?: XOR<CategoryCreateWithoutDisabilitiesInput, CategoryUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDisabilitiesInput
    upsert?: CategoryUpsertWithoutDisabilitiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDisabilitiesInput, CategoryUpdateWithoutDisabilitiesInput>, CategoryUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type List_disabilityUpdateManyWithoutDisabilityNestedInput = {
    create?: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput> | List_disabilityCreateWithoutDisabilityInput[] | List_disabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutDisabilityInput | List_disabilityCreateOrConnectWithoutDisabilityInput[]
    upsert?: List_disabilityUpsertWithWhereUniqueWithoutDisabilityInput | List_disabilityUpsertWithWhereUniqueWithoutDisabilityInput[]
    createMany?: List_disabilityCreateManyDisabilityInputEnvelope
    set?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    disconnect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    delete?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    update?: List_disabilityUpdateWithWhereUniqueWithoutDisabilityInput | List_disabilityUpdateWithWhereUniqueWithoutDisabilityInput[]
    updateMany?: List_disabilityUpdateManyWithWhereWithoutDisabilityInput | List_disabilityUpdateManyWithWhereWithoutDisabilityInput[]
    deleteMany?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
  }

  export type List_disabilityUncheckedUpdateManyWithoutDisabilityNestedInput = {
    create?: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput> | List_disabilityCreateWithoutDisabilityInput[] | List_disabilityUncheckedCreateWithoutDisabilityInput[]
    connectOrCreate?: List_disabilityCreateOrConnectWithoutDisabilityInput | List_disabilityCreateOrConnectWithoutDisabilityInput[]
    upsert?: List_disabilityUpsertWithWhereUniqueWithoutDisabilityInput | List_disabilityUpsertWithWhereUniqueWithoutDisabilityInput[]
    createMany?: List_disabilityCreateManyDisabilityInputEnvelope
    set?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    disconnect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    delete?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    connect?: List_disabilityWhereUniqueInput | List_disabilityWhereUniqueInput[]
    update?: List_disabilityUpdateWithWhereUniqueWithoutDisabilityInput | List_disabilityUpdateWithWhereUniqueWithoutDisabilityInput[]
    updateMany?: List_disabilityUpdateManyWithWhereWithoutDisabilityInput | List_disabilityUpdateManyWithWhereWithoutDisabilityInput[]
    deleteMany?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
  }

  export type JobsCreateNestedManyWithoutAbilityInput = {
    create?: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput> | JobsCreateWithoutAbilityInput[] | JobsUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutAbilityInput | JobsCreateOrConnectWithoutAbilityInput[]
    createMany?: JobsCreateManyAbilityInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type JobsUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput> | JobsCreateWithoutAbilityInput[] | JobsUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutAbilityInput | JobsCreateOrConnectWithoutAbilityInput[]
    createMany?: JobsCreateManyAbilityInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type JobsUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput> | JobsCreateWithoutAbilityInput[] | JobsUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutAbilityInput | JobsCreateOrConnectWithoutAbilityInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutAbilityInput | JobsUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: JobsCreateManyAbilityInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutAbilityInput | JobsUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutAbilityInput | JobsUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type JobsUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput> | JobsCreateWithoutAbilityInput[] | JobsUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutAbilityInput | JobsCreateOrConnectWithoutAbilityInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutAbilityInput | JobsUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: JobsCreateManyAbilityInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutAbilityInput | JobsUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutAbilityInput | JobsUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type Job_seekerCreateNestedOneWithoutSkillsInput = {
    create?: XOR<Job_seekerCreateWithoutSkillsInput, Job_seekerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutSkillsInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutList_skillInput = {
    create?: XOR<SkillCreateWithoutList_skillInput, SkillUncheckedCreateWithoutList_skillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutList_skillInput
    connect?: SkillWhereUniqueInput
  }

  export type Job_seekerUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<Job_seekerCreateWithoutSkillsInput, Job_seekerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutSkillsInput
    upsert?: Job_seekerUpsertWithoutSkillsInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutSkillsInput, Job_seekerUpdateWithoutSkillsInput>, Job_seekerUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutList_skillNestedInput = {
    create?: XOR<SkillCreateWithoutList_skillInput, SkillUncheckedCreateWithoutList_skillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutList_skillInput
    upsert?: SkillUpsertWithoutList_skillInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutList_skillInput, SkillUpdateWithoutList_skillInput>, SkillUncheckedUpdateWithoutList_skillInput>
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

  export type JobsCreateNestedOneWithoutJobSkillsInput = {
    create?: XOR<JobsCreateWithoutJobSkillsInput, JobsUncheckedCreateWithoutJobSkillsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobSkillsInput
    connect?: JobsWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutList_job_skillInput = {
    create?: XOR<SkillCreateWithoutList_job_skillInput, SkillUncheckedCreateWithoutList_job_skillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutList_job_skillInput
    connect?: SkillWhereUniqueInput
  }

  export type JobsUpdateOneRequiredWithoutJobSkillsNestedInput = {
    create?: XOR<JobsCreateWithoutJobSkillsInput, JobsUncheckedCreateWithoutJobSkillsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobSkillsInput
    upsert?: JobsUpsertWithoutJobSkillsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutJobSkillsInput, JobsUpdateWithoutJobSkillsInput>, JobsUncheckedUpdateWithoutJobSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutList_job_skillNestedInput = {
    create?: XOR<SkillCreateWithoutList_job_skillInput, SkillUncheckedCreateWithoutList_job_skillInput>
    connectOrCreate?: SkillCreateOrConnectWithoutList_job_skillInput
    upsert?: SkillUpsertWithoutList_job_skillInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutList_job_skillInput, SkillUpdateWithoutList_job_skillInput>, SkillUncheckedUpdateWithoutList_job_skillInput>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type Job_seekerCreateWithoutUserInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutUserInput = {
    id?: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutUserInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput>
  }

  export type Job_seekerCreateManyUserInputEnvelope = {
    data: Job_seekerCreateManyUserInput | Job_seekerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    jobs?: JobsCreateNestedManyWithoutCompanyInput
    job_application?: Job_applicationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    jobs?: JobsUncheckedCreateNestedManyWithoutCompanyInput
    job_application?: Job_applicationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Job_seekerUpsertWithWhereUniqueWithoutUserInput = {
    where: Job_seekerWhereUniqueInput
    update: XOR<Job_seekerUpdateWithoutUserInput, Job_seekerUncheckedUpdateWithoutUserInput>
    create: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput>
  }

  export type Job_seekerUpdateWithWhereUniqueWithoutUserInput = {
    where: Job_seekerWhereUniqueInput
    data: XOR<Job_seekerUpdateWithoutUserInput, Job_seekerUncheckedUpdateWithoutUserInput>
  }

  export type Job_seekerUpdateManyWithWhereWithoutUserInput = {
    where: Job_seekerScalarWhereInput
    data: XOR<Job_seekerUpdateManyMutationInput, Job_seekerUncheckedUpdateManyWithoutUserInput>
  }

  export type Job_seekerScalarWhereInput = {
    AND?: Job_seekerScalarWhereInput | Job_seekerScalarWhereInput[]
    OR?: Job_seekerScalarWhereInput[]
    NOT?: Job_seekerScalarWhereInput | Job_seekerScalarWhereInput[]
    id?: IntFilter<"Job_seeker"> | number
    user_id?: IntFilter<"Job_seeker"> | number
    fullname?: StringFilter<"Job_seeker"> | string
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
  }

  export type CompanyUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateManyWithWhereWithoutUserInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    picture?: StringNullableFilter<"Company"> | string | null
  }

  export type UserCreateWithoutJob_seekerInput = {
    email: string
    password: string
    role: string
    is_verified?: boolean
    company?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    email: string
    password: string
    role: string
    is_verified?: boolean
    company?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJob_seekerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_certificateCreateWithoutJob_seekerInput = {
    name?: string | null
    description?: string | null
  }

  export type List_certificateUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    name?: string | null
    description?: string | null
  }

  export type List_certificateCreateOrConnectWithoutJob_seekerInput = {
    where: List_certificateWhereUniqueInput
    create: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_certificateCreateManyJob_seekerInputEnvelope = {
    data: List_certificateCreateManyJob_seekerInput | List_certificateCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
  }

  export type List_disabilityCreateWithoutJob_seekerInput = {
    disability: DisabilityCreateNestedOneWithoutList_disabilitiesInput
  }

  export type List_disabilityUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    disability_id: number
  }

  export type List_disabilityCreateOrConnectWithoutJob_seekerInput = {
    where: List_disabilityWhereUniqueInput
    create: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_disabilityCreateManyJob_seekerInputEnvelope = {
    data: List_disabilityCreateManyJob_seekerInput | List_disabilityCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
  }

  export type List_skillsCreateWithoutJob_seekerInput = {
    skill: SkillCreateNestedOneWithoutList_skillInput
  }

  export type List_skillsUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    skillId: number
  }

  export type List_skillsCreateOrConnectWithoutJob_seekerInput = {
    where: List_skillsWhereUniqueInput
    create: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_skillsCreateManyJob_seekerInputEnvelope = {
    data: List_skillsCreateManyJob_seekerInput | List_skillsCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
  }

  export type Job_applicationCreateWithoutJob_seekerInput = {
    status: string
    job: JobsCreateNestedOneWithoutJobApplicationsInput
    company: CompanyCreateNestedOneWithoutJob_applicationInput
  }

  export type Job_applicationUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
  }

  export type Job_applicationCreateOrConnectWithoutJob_seekerInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput>
  }

  export type Job_applicationCreateManyJob_seekerInputEnvelope = {
    data: Job_applicationCreateManyJob_seekerInput | Job_applicationCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJob_seekerInput = {
    update: XOR<UserUpdateWithoutJob_seekerInput, UserUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJob_seekerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJob_seekerInput, UserUncheckedUpdateWithoutJob_seekerInput>
  }

  export type UserUpdateWithoutJob_seekerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type List_certificateUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: List_certificateWhereUniqueInput
    update: XOR<List_certificateUpdateWithoutJob_seekerInput, List_certificateUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<List_certificateCreateWithoutJob_seekerInput, List_certificateUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_certificateUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: List_certificateWhereUniqueInput
    data: XOR<List_certificateUpdateWithoutJob_seekerInput, List_certificateUncheckedUpdateWithoutJob_seekerInput>
  }

  export type List_certificateUpdateManyWithWhereWithoutJob_seekerInput = {
    where: List_certificateScalarWhereInput
    data: XOR<List_certificateUpdateManyMutationInput, List_certificateUncheckedUpdateManyWithoutJob_seekerInput>
  }

  export type List_certificateScalarWhereInput = {
    AND?: List_certificateScalarWhereInput | List_certificateScalarWhereInput[]
    OR?: List_certificateScalarWhereInput[]
    NOT?: List_certificateScalarWhereInput | List_certificateScalarWhereInput[]
    id?: IntFilter<"List_certificate"> | number
    job_seeker_id?: IntFilter<"List_certificate"> | number
    name?: StringNullableFilter<"List_certificate"> | string | null
    description?: StringNullableFilter<"List_certificate"> | string | null
  }

  export type List_disabilityUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: List_disabilityWhereUniqueInput
    update: XOR<List_disabilityUpdateWithoutJob_seekerInput, List_disabilityUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<List_disabilityCreateWithoutJob_seekerInput, List_disabilityUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_disabilityUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: List_disabilityWhereUniqueInput
    data: XOR<List_disabilityUpdateWithoutJob_seekerInput, List_disabilityUncheckedUpdateWithoutJob_seekerInput>
  }

  export type List_disabilityUpdateManyWithWhereWithoutJob_seekerInput = {
    where: List_disabilityScalarWhereInput
    data: XOR<List_disabilityUpdateManyMutationInput, List_disabilityUncheckedUpdateManyWithoutJob_seekerInput>
  }

  export type List_disabilityScalarWhereInput = {
    AND?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
    OR?: List_disabilityScalarWhereInput[]
    NOT?: List_disabilityScalarWhereInput | List_disabilityScalarWhereInput[]
    id?: IntFilter<"List_disability"> | number
    job_seeker_id?: IntFilter<"List_disability"> | number
    disability_id?: IntFilter<"List_disability"> | number
  }

  export type List_skillsUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: List_skillsWhereUniqueInput
    update: XOR<List_skillsUpdateWithoutJob_seekerInput, List_skillsUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<List_skillsCreateWithoutJob_seekerInput, List_skillsUncheckedCreateWithoutJob_seekerInput>
  }

  export type List_skillsUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: List_skillsWhereUniqueInput
    data: XOR<List_skillsUpdateWithoutJob_seekerInput, List_skillsUncheckedUpdateWithoutJob_seekerInput>
  }

  export type List_skillsUpdateManyWithWhereWithoutJob_seekerInput = {
    where: List_skillsScalarWhereInput
    data: XOR<List_skillsUpdateManyMutationInput, List_skillsUncheckedUpdateManyWithoutJob_seekerInput>
  }

  export type List_skillsScalarWhereInput = {
    AND?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
    OR?: List_skillsScalarWhereInput[]
    NOT?: List_skillsScalarWhereInput | List_skillsScalarWhereInput[]
    id?: IntFilter<"List_skills"> | number
    job_seeker_id?: IntFilter<"List_skills"> | number
    skillId?: IntFilter<"List_skills"> | number
  }

  export type Job_applicationUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: Job_applicationWhereUniqueInput
    update: XOR<Job_applicationUpdateWithoutJob_seekerInput, Job_applicationUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput>
  }

  export type Job_applicationUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: Job_applicationWhereUniqueInput
    data: XOR<Job_applicationUpdateWithoutJob_seekerInput, Job_applicationUncheckedUpdateWithoutJob_seekerInput>
  }

  export type Job_applicationUpdateManyWithWhereWithoutJob_seekerInput = {
    where: Job_applicationScalarWhereInput
    data: XOR<Job_applicationUpdateManyMutationInput, Job_applicationUncheckedUpdateManyWithoutJob_seekerInput>
  }

  export type Job_applicationScalarWhereInput = {
    AND?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
    OR?: Job_applicationScalarWhereInput[]
    NOT?: Job_applicationScalarWhereInput | Job_applicationScalarWhereInput[]
    id?: IntFilter<"Job_application"> | number
    job_seeker_id?: IntFilter<"Job_application"> | number
    job_id?: IntFilter<"Job_application"> | number
    company_id?: IntFilter<"Job_application"> | number
    status?: StringFilter<"Job_application"> | string
  }

  export type UserCreateWithoutCompanyInput = {
    email: string
    password: string
    role: string
    is_verified?: boolean
    job_seeker?: Job_seekerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    email: string
    password: string
    role: string
    is_verified?: boolean
    job_seeker?: Job_seekerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type JobsCreateWithoutCompanyInput = {
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability?: AbilityCreateNestedOneWithoutJobsInput
    jobSkills?: List_job_skillCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
    jobSkills?: List_job_skillUncheckedCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutCompanyInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput>
  }

  export type JobsCreateManyCompanyInputEnvelope = {
    data: JobsCreateManyCompanyInput | JobsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type Job_applicationCreateWithoutCompanyInput = {
    status: string
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
    job: JobsCreateNestedOneWithoutJobApplicationsInput
  }

  export type Job_applicationUncheckedCreateWithoutCompanyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    status: string
  }

  export type Job_applicationCreateOrConnectWithoutCompanyInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput>
  }

  export type Job_applicationCreateManyCompanyInputEnvelope = {
    data: Job_applicationCreateManyCompanyInput | Job_applicationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    job_seeker?: Job_seekerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    job_seeker?: Job_seekerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobsWhereUniqueInput
    update: XOR<JobsUpdateWithoutCompanyInput, JobsUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput>
  }

  export type JobsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobsWhereUniqueInput
    data: XOR<JobsUpdateWithoutCompanyInput, JobsUncheckedUpdateWithoutCompanyInput>
  }

  export type JobsUpdateManyWithWhereWithoutCompanyInput = {
    where: JobsScalarWhereInput
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobsScalarWhereInput = {
    AND?: JobsScalarWhereInput | JobsScalarWhereInput[]
    OR?: JobsScalarWhereInput[]
    NOT?: JobsScalarWhereInput | JobsScalarWhereInput[]
    id?: IntFilter<"Jobs"> | number
    company_id?: IntFilter<"Jobs"> | number
    title?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    employmentType?: StringFilter<"Jobs"> | string
    estimateSalary?: IntNullableFilter<"Jobs"> | number | null
    ability_id?: IntNullableFilter<"Jobs"> | number | null
  }

  export type Job_applicationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Job_applicationWhereUniqueInput
    update: XOR<Job_applicationUpdateWithoutCompanyInput, Job_applicationUncheckedUpdateWithoutCompanyInput>
    create: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput>
  }

  export type Job_applicationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Job_applicationWhereUniqueInput
    data: XOR<Job_applicationUpdateWithoutCompanyInput, Job_applicationUncheckedUpdateWithoutCompanyInput>
  }

  export type Job_applicationUpdateManyWithWhereWithoutCompanyInput = {
    where: Job_applicationScalarWhereInput
    data: XOR<Job_applicationUpdateManyMutationInput, Job_applicationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyCreateWithoutJobsInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    user: UserCreateNestedOneWithoutCompanyInput
    job_application?: Job_applicationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutJobsInput = {
    id?: number
    user_id: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    job_application?: Job_applicationUncheckedCreateNestedManyWithoutCompanyInput
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

  export type List_job_skillCreateWithoutJobInput = {
    skill: SkillCreateNestedOneWithoutList_job_skillInput
  }

  export type List_job_skillUncheckedCreateWithoutJobInput = {
    id?: number
    skill_id: number
  }

  export type List_job_skillCreateOrConnectWithoutJobInput = {
    where: List_job_skillWhereUniqueInput
    create: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput>
  }

  export type List_job_skillCreateManyJobInputEnvelope = {
    data: List_job_skillCreateManyJobInput | List_job_skillCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type Job_applicationCreateWithoutJobInput = {
    status: string
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
    company: CompanyCreateNestedOneWithoutJob_applicationInput
  }

  export type Job_applicationUncheckedCreateWithoutJobInput = {
    id?: number
    job_seeker_id: number
    company_id: number
    status: string
  }

  export type Job_applicationCreateOrConnectWithoutJobInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput>
  }

  export type Job_applicationCreateManyJobInputEnvelope = {
    data: Job_applicationCreateManyJobInput | Job_applicationCreateManyJobInput[]
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
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    job_application?: Job_applicationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    job_application?: Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput
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

  export type List_job_skillUpsertWithWhereUniqueWithoutJobInput = {
    where: List_job_skillWhereUniqueInput
    update: XOR<List_job_skillUpdateWithoutJobInput, List_job_skillUncheckedUpdateWithoutJobInput>
    create: XOR<List_job_skillCreateWithoutJobInput, List_job_skillUncheckedCreateWithoutJobInput>
  }

  export type List_job_skillUpdateWithWhereUniqueWithoutJobInput = {
    where: List_job_skillWhereUniqueInput
    data: XOR<List_job_skillUpdateWithoutJobInput, List_job_skillUncheckedUpdateWithoutJobInput>
  }

  export type List_job_skillUpdateManyWithWhereWithoutJobInput = {
    where: List_job_skillScalarWhereInput
    data: XOR<List_job_skillUpdateManyMutationInput, List_job_skillUncheckedUpdateManyWithoutJobInput>
  }

  export type List_job_skillScalarWhereInput = {
    AND?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
    OR?: List_job_skillScalarWhereInput[]
    NOT?: List_job_skillScalarWhereInput | List_job_skillScalarWhereInput[]
    id?: IntFilter<"List_job_skill"> | number
    job_id?: IntFilter<"List_job_skill"> | number
    skill_id?: IntFilter<"List_job_skill"> | number
  }

  export type Job_applicationUpsertWithWhereUniqueWithoutJobInput = {
    where: Job_applicationWhereUniqueInput
    update: XOR<Job_applicationUpdateWithoutJobInput, Job_applicationUncheckedUpdateWithoutJobInput>
    create: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput>
  }

  export type Job_applicationUpdateWithWhereUniqueWithoutJobInput = {
    where: Job_applicationWhereUniqueInput
    data: XOR<Job_applicationUpdateWithoutJobInput, Job_applicationUncheckedUpdateWithoutJobInput>
  }

  export type Job_applicationUpdateManyWithWhereWithoutJobInput = {
    where: Job_applicationScalarWhereInput
    data: XOR<Job_applicationUpdateManyMutationInput, Job_applicationUncheckedUpdateManyWithoutJobInput>
  }

  export type Job_seekerCreateWithoutCertificatesInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutCertificatesInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutCertificatesInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutCertificatesInput, Job_seekerUncheckedCreateWithoutCertificatesInput>
  }

  export type Job_seekerUpsertWithoutCertificatesInput = {
    update: XOR<Job_seekerUpdateWithoutCertificatesInput, Job_seekerUncheckedUpdateWithoutCertificatesInput>
    create: XOR<Job_seekerCreateWithoutCertificatesInput, Job_seekerUncheckedCreateWithoutCertificatesInput>
    where?: Job_seekerWhereInput
  }

  export type Job_seekerUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Job_seekerWhereInput
    data: XOR<Job_seekerUpdateWithoutCertificatesInput, Job_seekerUncheckedUpdateWithoutCertificatesInput>
  }

  export type Job_seekerUpdateWithoutCertificatesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type List_skillsCreateWithoutSkillInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutSkillsInput
  }

  export type List_skillsUncheckedCreateWithoutSkillInput = {
    id?: number
    job_seeker_id: number
  }

  export type List_skillsCreateOrConnectWithoutSkillInput = {
    where: List_skillsWhereUniqueInput
    create: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput>
  }

  export type List_skillsCreateManySkillInputEnvelope = {
    data: List_skillsCreateManySkillInput | List_skillsCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type List_job_skillCreateWithoutSkillInput = {
    job: JobsCreateNestedOneWithoutJobSkillsInput
  }

  export type List_job_skillUncheckedCreateWithoutSkillInput = {
    id?: number
    job_id: number
  }

  export type List_job_skillCreateOrConnectWithoutSkillInput = {
    where: List_job_skillWhereUniqueInput
    create: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput>
  }

  export type List_job_skillCreateManySkillInputEnvelope = {
    data: List_job_skillCreateManySkillInput | List_job_skillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type List_skillsUpsertWithWhereUniqueWithoutSkillInput = {
    where: List_skillsWhereUniqueInput
    update: XOR<List_skillsUpdateWithoutSkillInput, List_skillsUncheckedUpdateWithoutSkillInput>
    create: XOR<List_skillsCreateWithoutSkillInput, List_skillsUncheckedCreateWithoutSkillInput>
  }

  export type List_skillsUpdateWithWhereUniqueWithoutSkillInput = {
    where: List_skillsWhereUniqueInput
    data: XOR<List_skillsUpdateWithoutSkillInput, List_skillsUncheckedUpdateWithoutSkillInput>
  }

  export type List_skillsUpdateManyWithWhereWithoutSkillInput = {
    where: List_skillsScalarWhereInput
    data: XOR<List_skillsUpdateManyMutationInput, List_skillsUncheckedUpdateManyWithoutSkillInput>
  }

  export type List_job_skillUpsertWithWhereUniqueWithoutSkillInput = {
    where: List_job_skillWhereUniqueInput
    update: XOR<List_job_skillUpdateWithoutSkillInput, List_job_skillUncheckedUpdateWithoutSkillInput>
    create: XOR<List_job_skillCreateWithoutSkillInput, List_job_skillUncheckedCreateWithoutSkillInput>
  }

  export type List_job_skillUpdateWithWhereUniqueWithoutSkillInput = {
    where: List_job_skillWhereUniqueInput
    data: XOR<List_job_skillUpdateWithoutSkillInput, List_job_skillUncheckedUpdateWithoutSkillInput>
  }

  export type List_job_skillUpdateManyWithWhereWithoutSkillInput = {
    where: List_job_skillScalarWhereInput
    data: XOR<List_job_skillUpdateManyMutationInput, List_job_skillUncheckedUpdateManyWithoutSkillInput>
  }

  export type Job_seekerCreateWithoutDisabilitiesInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutDisabilitiesInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutDisabilitiesInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
  }

  export type DisabilityCreateWithoutList_disabilitiesInput = {
    name: string
    category: CategoryCreateNestedOneWithoutDisabilitiesInput
  }

  export type DisabilityUncheckedCreateWithoutList_disabilitiesInput = {
    id?: number
    category_id: number
    name: string
  }

  export type DisabilityCreateOrConnectWithoutList_disabilitiesInput = {
    where: DisabilityWhereUniqueInput
    create: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
  }

  export type Job_seekerUpsertWithoutDisabilitiesInput = {
    update: XOR<Job_seekerUpdateWithoutDisabilitiesInput, Job_seekerUncheckedUpdateWithoutDisabilitiesInput>
    create: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
    where?: Job_seekerWhereInput
  }

  export type Job_seekerUpdateToOneWithWhereWithoutDisabilitiesInput = {
    where?: Job_seekerWhereInput
    data: XOR<Job_seekerUpdateWithoutDisabilitiesInput, Job_seekerUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type Job_seekerUpdateWithoutDisabilitiesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutDisabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type DisabilityUpsertWithoutList_disabilitiesInput = {
    update: XOR<DisabilityUpdateWithoutList_disabilitiesInput, DisabilityUncheckedUpdateWithoutList_disabilitiesInput>
    create: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
    where?: DisabilityWhereInput
  }

  export type DisabilityUpdateToOneWithWhereWithoutList_disabilitiesInput = {
    where?: DisabilityWhereInput
    data: XOR<DisabilityUpdateWithoutList_disabilitiesInput, DisabilityUncheckedUpdateWithoutList_disabilitiesInput>
  }

  export type DisabilityUpdateWithoutList_disabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutDisabilitiesNestedInput
  }

  export type DisabilityUncheckedUpdateWithoutList_disabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Job_seekerCreateWithoutJob_applicationsInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutJob_applicationsInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
    skills?: List_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutJob_applicationsInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
  }

  export type JobsCreateWithoutJobApplicationsInput = {
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    jobSkills?: List_job_skillCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutJobApplicationsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
    jobSkills?: List_job_skillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutJobApplicationsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
  }

  export type CompanyCreateWithoutJob_applicationInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    user: UserCreateNestedOneWithoutCompanyInput
    jobs?: JobsCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutJob_applicationInput = {
    id?: number
    user_id: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    jobs?: JobsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutJob_applicationInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
  }

  export type Job_seekerUpsertWithoutJob_applicationsInput = {
    update: XOR<Job_seekerUpdateWithoutJob_applicationsInput, Job_seekerUncheckedUpdateWithoutJob_applicationsInput>
    create: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
    where?: Job_seekerWhereInput
  }

  export type Job_seekerUpdateToOneWithWhereWithoutJob_applicationsInput = {
    where?: Job_seekerWhereInput
    data: XOR<Job_seekerUpdateWithoutJob_applicationsInput, Job_seekerUncheckedUpdateWithoutJob_applicationsInput>
  }

  export type Job_seekerUpdateWithoutJob_applicationsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutJob_applicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type JobsUpsertWithoutJobApplicationsInput = {
    update: XOR<JobsUpdateWithoutJobApplicationsInput, JobsUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutJobApplicationsInput, JobsUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type JobsUpdateWithoutJobApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    jobSkills?: List_job_skillUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutJobApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    jobSkills?: List_job_skillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type CompanyUpsertWithoutJob_applicationInput = {
    update: XOR<CompanyUpdateWithoutJob_applicationInput, CompanyUncheckedUpdateWithoutJob_applicationInput>
    create: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJob_applicationInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJob_applicationInput, CompanyUncheckedUpdateWithoutJob_applicationInput>
  }

  export type CompanyUpdateWithoutJob_applicationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    jobs?: JobsUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutJob_applicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobsUncheckedUpdateManyWithoutCompanyNestedInput
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

  export type List_disabilityCreateWithoutDisabilityInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutDisabilitiesInput
  }

  export type List_disabilityUncheckedCreateWithoutDisabilityInput = {
    id?: number
    job_seeker_id: number
  }

  export type List_disabilityCreateOrConnectWithoutDisabilityInput = {
    where: List_disabilityWhereUniqueInput
    create: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput>
  }

  export type List_disabilityCreateManyDisabilityInputEnvelope = {
    data: List_disabilityCreateManyDisabilityInput | List_disabilityCreateManyDisabilityInput[]
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

  export type List_disabilityUpsertWithWhereUniqueWithoutDisabilityInput = {
    where: List_disabilityWhereUniqueInput
    update: XOR<List_disabilityUpdateWithoutDisabilityInput, List_disabilityUncheckedUpdateWithoutDisabilityInput>
    create: XOR<List_disabilityCreateWithoutDisabilityInput, List_disabilityUncheckedCreateWithoutDisabilityInput>
  }

  export type List_disabilityUpdateWithWhereUniqueWithoutDisabilityInput = {
    where: List_disabilityWhereUniqueInput
    data: XOR<List_disabilityUpdateWithoutDisabilityInput, List_disabilityUncheckedUpdateWithoutDisabilityInput>
  }

  export type List_disabilityUpdateManyWithWhereWithoutDisabilityInput = {
    where: List_disabilityScalarWhereInput
    data: XOR<List_disabilityUpdateManyMutationInput, List_disabilityUncheckedUpdateManyWithoutDisabilityInput>
  }

  export type JobsCreateWithoutAbilityInput = {
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    jobSkills?: List_job_skillCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutAbilityInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    jobSkills?: List_job_skillUncheckedCreateNestedManyWithoutJobInput
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutAbilityInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput>
  }

  export type JobsCreateManyAbilityInputEnvelope = {
    data: JobsCreateManyAbilityInput | JobsCreateManyAbilityInput[]
    skipDuplicates?: boolean
  }

  export type JobsUpsertWithWhereUniqueWithoutAbilityInput = {
    where: JobsWhereUniqueInput
    update: XOR<JobsUpdateWithoutAbilityInput, JobsUncheckedUpdateWithoutAbilityInput>
    create: XOR<JobsCreateWithoutAbilityInput, JobsUncheckedCreateWithoutAbilityInput>
  }

  export type JobsUpdateWithWhereUniqueWithoutAbilityInput = {
    where: JobsWhereUniqueInput
    data: XOR<JobsUpdateWithoutAbilityInput, JobsUncheckedUpdateWithoutAbilityInput>
  }

  export type JobsUpdateManyWithWhereWithoutAbilityInput = {
    where: JobsScalarWhereInput
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyWithoutAbilityInput>
  }

  export type Job_seekerCreateWithoutSkillsInput = {
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutSkillsInput = {
    id?: number
    user_id: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutSkillsInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutSkillsInput, Job_seekerUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutList_skillInput = {
    name: string
    list_job_skill?: List_job_skillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutList_skillInput = {
    id?: number
    name: string
    list_job_skill?: List_job_skillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutList_skillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutList_skillInput, SkillUncheckedCreateWithoutList_skillInput>
  }

  export type Job_seekerUpsertWithoutSkillsInput = {
    update: XOR<Job_seekerUpdateWithoutSkillsInput, Job_seekerUncheckedUpdateWithoutSkillsInput>
    create: XOR<Job_seekerCreateWithoutSkillsInput, Job_seekerUncheckedCreateWithoutSkillsInput>
    where?: Job_seekerWhereInput
  }

  export type Job_seekerUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Job_seekerWhereInput
    data: XOR<Job_seekerUpdateWithoutSkillsInput, Job_seekerUncheckedUpdateWithoutSkillsInput>
  }

  export type Job_seekerUpdateWithoutSkillsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type SkillUpsertWithoutList_skillInput = {
    update: XOR<SkillUpdateWithoutList_skillInput, SkillUncheckedUpdateWithoutList_skillInput>
    create: XOR<SkillCreateWithoutList_skillInput, SkillUncheckedCreateWithoutList_skillInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutList_skillInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutList_skillInput, SkillUncheckedUpdateWithoutList_skillInput>
  }

  export type SkillUpdateWithoutList_skillInput = {
    name?: StringFieldUpdateOperationsInput | string
    list_job_skill?: List_job_skillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutList_skillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_job_skill?: List_job_skillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type DisabilityCreateWithoutCategoryInput = {
    name: string
    list_disabilities?: List_disabilityCreateNestedManyWithoutDisabilityInput
  }

  export type DisabilityUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    list_disabilities?: List_disabilityUncheckedCreateNestedManyWithoutDisabilityInput
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
  }

  export type JobsCreateWithoutJobSkillsInput = {
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    company: CompanyCreateNestedOneWithoutJobsInput
    ability?: AbilityCreateNestedOneWithoutJobsInput
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutJobSkillsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutJobSkillsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutJobSkillsInput, JobsUncheckedCreateWithoutJobSkillsInput>
  }

  export type SkillCreateWithoutList_job_skillInput = {
    name: string
    list_skill?: List_skillsCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutList_job_skillInput = {
    id?: number
    name: string
    list_skill?: List_skillsUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutList_job_skillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutList_job_skillInput, SkillUncheckedCreateWithoutList_job_skillInput>
  }

  export type JobsUpsertWithoutJobSkillsInput = {
    update: XOR<JobsUpdateWithoutJobSkillsInput, JobsUncheckedUpdateWithoutJobSkillsInput>
    create: XOR<JobsCreateWithoutJobSkillsInput, JobsUncheckedCreateWithoutJobSkillsInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutJobSkillsInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutJobSkillsInput, JobsUncheckedUpdateWithoutJobSkillsInput>
  }

  export type JobsUpdateWithoutJobSkillsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutJobSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type SkillUpsertWithoutList_job_skillInput = {
    update: XOR<SkillUpdateWithoutList_job_skillInput, SkillUncheckedUpdateWithoutList_job_skillInput>
    create: XOR<SkillCreateWithoutList_job_skillInput, SkillUncheckedCreateWithoutList_job_skillInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutList_job_skillInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutList_job_skillInput, SkillUncheckedUpdateWithoutList_job_skillInput>
  }

  export type SkillUpdateWithoutList_job_skillInput = {
    name?: StringFieldUpdateOperationsInput | string
    list_skill?: List_skillsUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutList_job_skillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_skill?: List_skillsUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type Job_seekerCreateManyUserInput = {
    id?: number
    fullname: string
    dob: Date | string
    gender: string
    phone_number?: string | null
    city?: string | null
  }

  export type CompanyCreateManyUserInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
  }

  export type Job_seekerUpdateWithoutUserInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
    skills?: List_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobsUpdateManyWithoutCompanyNestedInput
    job_application?: Job_applicationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobsUncheckedUpdateManyWithoutCompanyNestedInput
    job_application?: Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_certificateCreateManyJob_seekerInput = {
    id?: number
    name?: string | null
    description?: string | null
  }

  export type List_disabilityCreateManyJob_seekerInput = {
    id?: number
    disability_id: number
  }

  export type List_skillsCreateManyJob_seekerInput = {
    id?: number
    skillId: number
  }

  export type Job_applicationCreateManyJob_seekerInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
  }

  export type List_certificateUpdateWithoutJob_seekerInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_certificateUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_certificateUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_disabilityUpdateWithoutJob_seekerInput = {
    disability?: DisabilityUpdateOneRequiredWithoutList_disabilitiesNestedInput
  }

  export type List_disabilityUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_disabilityUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    disability_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_skillsUpdateWithoutJob_seekerInput = {
    skill?: SkillUpdateOneRequiredWithoutList_skillNestedInput
  }

  export type List_skillsUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type List_skillsUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type Job_applicationUpdateWithoutJob_seekerInput = {
    status?: StringFieldUpdateOperationsInput | string
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type Job_applicationUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobsCreateManyCompanyInput = {
    id?: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
    ability_id?: number | null
  }

  export type Job_applicationCreateManyCompanyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    status: string
  }

  export type JobsUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability?: AbilityUpdateOneWithoutJobsNestedInput
    jobSkills?: List_job_skillUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
    jobSkills?: List_job_skillUncheckedUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Job_applicationUpdateWithoutCompanyInput = {
    status?: StringFieldUpdateOperationsInput | string
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type Job_applicationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type List_job_skillCreateManyJobInput = {
    id?: number
    skill_id: number
  }

  export type Job_applicationCreateManyJobInput = {
    id?: number
    job_seeker_id: number
    company_id: number
    status: string
  }

  export type List_job_skillUpdateWithoutJobInput = {
    skill?: SkillUpdateOneRequiredWithoutList_job_skillNestedInput
  }

  export type List_job_skillUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_job_skillUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_applicationUpdateWithoutJobInput = {
    status?: StringFieldUpdateOperationsInput | string
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type Job_applicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type List_skillsCreateManySkillInput = {
    id?: number
    job_seeker_id: number
  }

  export type List_job_skillCreateManySkillInput = {
    id?: number
    job_id: number
  }

  export type List_skillsUpdateWithoutSkillInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type List_skillsUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_skillsUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_job_skillUpdateWithoutSkillInput = {
    job?: JobsUpdateOneRequiredWithoutJobSkillsNestedInput
  }

  export type List_job_skillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_job_skillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_disabilityCreateManyDisabilityInput = {
    id?: number
    job_seeker_id: number
  }

  export type List_disabilityUpdateWithoutDisabilityInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutDisabilitiesNestedInput
  }

  export type List_disabilityUncheckedUpdateWithoutDisabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type List_disabilityUncheckedUpdateManyWithoutDisabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobsCreateManyAbilityInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employmentType: string
    estimateSalary?: number | null
  }

  export type JobsUpdateWithoutAbilityInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    jobSkills?: List_job_skillUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
    jobSkills?: List_job_skillUncheckedUpdateManyWithoutJobNestedInput
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateManyWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    estimateSalary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DisabilityCreateManyCategoryInput = {
    id?: number
    name: string
  }

  export type DisabilityUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    list_disabilities?: List_disabilityUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_disabilities?: List_disabilityUncheckedUpdateManyWithoutDisabilityNestedInput
  }

  export type DisabilityUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Job_seekerCountOutputTypeDefaultArgs instead
     */
    export type Job_seekerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Job_seekerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobsCountOutputTypeDefaultArgs instead
     */
    export type JobsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobsCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Job_seekerDefaultArgs instead
     */
    export type Job_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Job_seekerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobsDefaultArgs instead
     */
    export type JobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use List_certificateDefaultArgs instead
     */
    export type List_certificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = List_certificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillDefaultArgs instead
     */
    export type SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use List_disabilityDefaultArgs instead
     */
    export type List_disabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = List_disabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Job_applicationDefaultArgs instead
     */
    export type Job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Job_applicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisabilityDefaultArgs instead
     */
    export type DisabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AbilityDefaultArgs instead
     */
    export type AbilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AbilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use List_skillsDefaultArgs instead
     */
    export type List_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = List_skillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use List_job_skillDefaultArgs instead
     */
    export type List_job_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = List_job_skillDefaultArgs<ExtArgs>

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