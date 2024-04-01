
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
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
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
 * Model List_ability
 * 
 */
export type List_ability = $Result.DefaultSelection<Prisma.$List_abilityPayload>
/**
 * Model Job_seeker_skills
 * 
 */
export type Job_seeker_skills = $Result.DefaultSelection<Prisma.$Job_seeker_skillsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Required_skills
 * 
 */
export type Required_skills = $Result.DefaultSelection<Prisma.$Required_skillsPayload>

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
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs>;

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
   * `prisma.list_ability`: Exposes CRUD operations for the **List_ability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more List_abilities
    * const list_abilities = await prisma.list_ability.findMany()
    * ```
    */
  get list_ability(): Prisma.List_abilityDelegate<ExtArgs>;

  /**
   * `prisma.job_seeker_skills`: Exposes CRUD operations for the **Job_seeker_skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_seeker_skills
    * const job_seeker_skills = await prisma.job_seeker_skills.findMany()
    * ```
    */
  get job_seeker_skills(): Prisma.Job_seeker_skillsDelegate<ExtArgs>;

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
   * `prisma.required_skills`: Exposes CRUD operations for the **Required_skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Required_skills
    * const required_skills = await prisma.required_skills.findMany()
    * ```
    */
  get required_skills(): Prisma.Required_skillsDelegate<ExtArgs>;
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
    Skills: 'Skills',
    List_disability: 'List_disability',
    Job_application: 'Job_application',
    Disability: 'Disability',
    Ability: 'Ability',
    List_ability: 'List_ability',
    Job_seeker_skills: 'Job_seeker_skills',
    Category: 'Category',
    Required_skills: 'Required_skills'
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
      modelProps: 'user' | 'job_seeker' | 'company' | 'jobs' | 'list_certificate' | 'skills' | 'list_disability' | 'job_application' | 'disability' | 'ability' | 'list_ability' | 'job_seeker_skills' | 'category' | 'required_skills'
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
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>,
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
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
      List_ability: {
        payload: Prisma.$List_abilityPayload<ExtArgs>
        fields: Prisma.List_abilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.List_abilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.List_abilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          findFirst: {
            args: Prisma.List_abilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.List_abilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          findMany: {
            args: Prisma.List_abilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>[]
          }
          create: {
            args: Prisma.List_abilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          createMany: {
            args: Prisma.List_abilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.List_abilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          update: {
            args: Prisma.List_abilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          deleteMany: {
            args: Prisma.List_abilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.List_abilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.List_abilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$List_abilityPayload>
          }
          aggregate: {
            args: Prisma.List_abilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList_ability>
          }
          groupBy: {
            args: Prisma.List_abilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<List_abilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.List_abilityCountArgs<ExtArgs>,
            result: $Utils.Optional<List_abilityCountAggregateOutputType> | number
          }
        }
      }
      Job_seeker_skills: {
        payload: Prisma.$Job_seeker_skillsPayload<ExtArgs>
        fields: Prisma.Job_seeker_skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_seeker_skillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_seeker_skillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          findFirst: {
            args: Prisma.Job_seeker_skillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_seeker_skillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          findMany: {
            args: Prisma.Job_seeker_skillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>[]
          }
          create: {
            args: Prisma.Job_seeker_skillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          createMany: {
            args: Prisma.Job_seeker_skillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Job_seeker_skillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          update: {
            args: Prisma.Job_seeker_skillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          deleteMany: {
            args: Prisma.Job_seeker_skillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Job_seeker_skillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Job_seeker_skillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Job_seeker_skillsPayload>
          }
          aggregate: {
            args: Prisma.Job_seeker_skillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob_seeker_skills>
          }
          groupBy: {
            args: Prisma.Job_seeker_skillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Job_seeker_skillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_seeker_skillsCountArgs<ExtArgs>,
            result: $Utils.Optional<Job_seeker_skillsCountAggregateOutputType> | number
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
      Required_skills: {
        payload: Prisma.$Required_skillsPayload<ExtArgs>
        fields: Prisma.Required_skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Required_skillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Required_skillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          findFirst: {
            args: Prisma.Required_skillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Required_skillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          findMany: {
            args: Prisma.Required_skillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>[]
          }
          create: {
            args: Prisma.Required_skillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          createMany: {
            args: Prisma.Required_skillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Required_skillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          update: {
            args: Prisma.Required_skillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          deleteMany: {
            args: Prisma.Required_skillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Required_skillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Required_skillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Required_skillsPayload>
          }
          aggregate: {
            args: Prisma.Required_skillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequired_skills>
          }
          groupBy: {
            args: Prisma.Required_skillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Required_skillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Required_skillsCountArgs<ExtArgs>,
            result: $Utils.Optional<Required_skillsCountAggregateOutputType> | number
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
    company: number
    job_seeker: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs
    job_seeker?: boolean | UserCountOutputTypeCountJob_seekerArgs
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
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_seekerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seekerWhereInput
  }



  /**
   * Count Type Job_seekerCountOutputType
   */

  export type Job_seekerCountOutputType = {
    job_applications: number
    job_seeker_skills: number
    certificates: number
    disabilities: number
  }

  export type Job_seekerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_applications?: boolean | Job_seekerCountOutputTypeCountJob_applicationsArgs
    job_seeker_skills?: boolean | Job_seekerCountOutputTypeCountJob_seeker_skillsArgs
    certificates?: boolean | Job_seekerCountOutputTypeCountCertificatesArgs
    disabilities?: boolean | Job_seekerCountOutputTypeCountDisabilitiesArgs
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
  export type Job_seekerCountOutputTypeCountJob_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }


  /**
   * Job_seekerCountOutputType without action
   */
  export type Job_seekerCountOutputTypeCountJob_seeker_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seeker_skillsWhereInput
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    job_application: number
    jobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | CompanyCountOutputTypeCountJob_applicationArgs
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
  export type CompanyCountOutputTypeCountJob_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
  }



  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    jobApplications: number
    list_ability: number
    required_skills: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | JobsCountOutputTypeCountJobApplicationsArgs
    list_ability?: boolean | JobsCountOutputTypeCountList_abilityArgs
    required_skills?: boolean | JobsCountOutputTypeCountRequired_skillsArgs
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
  export type JobsCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_applicationWhereInput
  }


  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountList_abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_abilityWhereInput
  }


  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountRequired_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Required_skillsWhereInput
  }



  /**
   * Count Type SkillsCountOutputType
   */

  export type SkillsCountOutputType = {
    job_seeker_skills: number
    required_skills: number
  }

  export type SkillsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker_skills?: boolean | SkillsCountOutputTypeCountJob_seeker_skillsArgs
    required_skills?: boolean | SkillsCountOutputTypeCountRequired_skillsArgs
  }

  // Custom InputTypes

  /**
   * SkillsCountOutputType without action
   */
  export type SkillsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillsCountOutputType
     */
    select?: SkillsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SkillsCountOutputType without action
   */
  export type SkillsCountOutputTypeCountJob_seeker_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seeker_skillsWhereInput
  }


  /**
   * SkillsCountOutputType without action
   */
  export type SkillsCountOutputTypeCountRequired_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Required_skillsWhereInput
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
    list_abilty: number
  }

  export type AbilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_abilty?: boolean | AbilityCountOutputTypeCountList_abiltyArgs
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
  export type AbilityCountOutputTypeCountList_abiltyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_abilityWhereInput
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
    company?: boolean | User$companyArgs<ExtArgs>
    job_seeker?: boolean | User$job_seekerArgs<ExtArgs>
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
    company?: boolean | User$companyArgs<ExtArgs>
    job_seeker?: boolean | User$job_seekerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>[]
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>[]
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

    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_seeker<T extends User$job_seekerArgs<ExtArgs> = {}>(args?: Subset<T, User$job_seekerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    phone_number: string | null
    city: string | null
    dob: Date | null
    gender: string | null
    description: string | null
  }

  export type Job_seekerMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    fullname: string | null
    phone_number: string | null
    city: string | null
    dob: Date | null
    gender: string | null
    description: string | null
  }

  export type Job_seekerCountAggregateOutputType = {
    id: number
    user_id: number
    fullname: number
    phone_number: number
    city: number
    dob: number
    gender: number
    description: number
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
    phone_number?: true
    city?: true
    dob?: true
    gender?: true
    description?: true
  }

  export type Job_seekerMaxAggregateInputType = {
    id?: true
    user_id?: true
    fullname?: true
    phone_number?: true
    city?: true
    dob?: true
    gender?: true
    description?: true
  }

  export type Job_seekerCountAggregateInputType = {
    id?: true
    user_id?: true
    fullname?: true
    phone_number?: true
    city?: true
    dob?: true
    gender?: true
    description?: true
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
    phone_number: string | null
    city: string | null
    dob: Date
    gender: string
    description: string | null
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
    phone_number?: boolean
    city?: boolean
    dob?: boolean
    gender?: boolean
    description?: boolean
    job_applications?: boolean | Job_seeker$job_applicationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    job_seeker_skills?: boolean | Job_seeker$job_seeker_skillsArgs<ExtArgs>
    certificates?: boolean | Job_seeker$certificatesArgs<ExtArgs>
    disabilities?: boolean | Job_seeker$disabilitiesArgs<ExtArgs>
    _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_seeker"]>

  export type Job_seekerSelectScalar = {
    id?: boolean
    user_id?: boolean
    fullname?: boolean
    phone_number?: boolean
    city?: boolean
    dob?: boolean
    gender?: boolean
    description?: boolean
  }

  export type Job_seekerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_applications?: boolean | Job_seeker$job_applicationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    job_seeker_skills?: boolean | Job_seeker$job_seeker_skillsArgs<ExtArgs>
    certificates?: boolean | Job_seeker$certificatesArgs<ExtArgs>
    disabilities?: boolean | Job_seeker$disabilitiesArgs<ExtArgs>
    _count?: boolean | Job_seekerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Job_seekerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_seeker"
    objects: {
      job_applications: Prisma.$Job_applicationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      job_seeker_skills: Prisma.$Job_seeker_skillsPayload<ExtArgs>[]
      certificates: Prisma.$List_certificatePayload<ExtArgs>[]
      disabilities: Prisma.$List_disabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      fullname: string
      phone_number: string | null
      city: string | null
      dob: Date
      gender: string
      description: string | null
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

    job_applications<T extends Job_seeker$job_applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$job_applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job_seeker_skills<T extends Job_seeker$job_seeker_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$job_seeker_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    certificates<T extends Job_seeker$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_certificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    disabilities<T extends Job_seeker$disabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Job_seeker$disabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_disabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly phone_number: FieldRef<"Job_seeker", 'String'>
    readonly city: FieldRef<"Job_seeker", 'String'>
    readonly dob: FieldRef<"Job_seeker", 'DateTime'>
    readonly gender: FieldRef<"Job_seeker", 'String'>
    readonly description: FieldRef<"Job_seeker", 'String'>
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
   * Job_seeker.job_seeker_skills
   */
  export type Job_seeker$job_seeker_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    where?: Job_seeker_skillsWhereInput
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    cursor?: Job_seeker_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_seeker_skillsScalarFieldEnum | Job_seeker_skillsScalarFieldEnum[]
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
    job_application?: boolean | Company$job_applicationArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
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
    job_application?: boolean | Company$job_applicationArgs<ExtArgs>
    jobs?: boolean | Company$jobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job_application: Prisma.$Job_applicationPayload<ExtArgs>[]
      jobs: Prisma.$JobsPayload<ExtArgs>[]
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

    job_application<T extends Company$job_applicationArgs<ExtArgs> = {}>(args?: Subset<T, Company$job_applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    jobs<T extends Company$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    min_salary: number | null
    max_salary: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_salary: number | null
    max_salary: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employment_type: string | null
    min_salary: number | null
    gender: string | null
    max_salary: number | null
    date_posted: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    title: string | null
    description: string | null
    employment_type: string | null
    min_salary: number | null
    gender: string | null
    max_salary: number | null
    date_posted: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    company_id: number
    title: number
    description: number
    employment_type: number
    min_salary: number
    gender: number
    max_salary: number
    date_posted: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    company_id?: true
    min_salary?: true
    max_salary?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    company_id?: true
    min_salary?: true
    max_salary?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    min_salary?: true
    gender?: true
    max_salary?: true
    date_posted?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    min_salary?: true
    gender?: true
    max_salary?: true
    date_posted?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    company_id?: true
    title?: true
    description?: true
    employment_type?: true
    min_salary?: true
    gender?: true
    max_salary?: true
    date_posted?: true
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
    employment_type: string
    min_salary: number | null
    gender: string | null
    max_salary: number | null
    date_posted: Date | null
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
    employment_type?: boolean
    min_salary?: boolean
    gender?: boolean
    max_salary?: boolean
    date_posted?: boolean
    jobApplications?: boolean | Jobs$jobApplicationsArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    list_ability?: boolean | Jobs$list_abilityArgs<ExtArgs>
    required_skills?: boolean | Jobs$required_skillsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type JobsSelectScalar = {
    id?: boolean
    company_id?: boolean
    title?: boolean
    description?: boolean
    employment_type?: boolean
    min_salary?: boolean
    gender?: boolean
    max_salary?: boolean
    date_posted?: boolean
  }

  export type JobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | Jobs$jobApplicationsArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    list_ability?: boolean | Jobs$list_abilityArgs<ExtArgs>
    required_skills?: boolean | Jobs$required_skillsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobs"
    objects: {
      jobApplications: Prisma.$Job_applicationPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs>
      list_ability: Prisma.$List_abilityPayload<ExtArgs>[]
      required_skills: Prisma.$Required_skillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      title: string
      description: string
      employment_type: string
      min_salary: number | null
      gender: string | null
      max_salary: number | null
      date_posted: Date | null
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

    jobApplications<T extends Jobs$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    list_ability<T extends Jobs$list_abilityArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$list_abilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    required_skills<T extends Jobs$required_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$required_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly employment_type: FieldRef<"Jobs", 'String'>
    readonly min_salary: FieldRef<"Jobs", 'Int'>
    readonly gender: FieldRef<"Jobs", 'String'>
    readonly max_salary: FieldRef<"Jobs", 'Int'>
    readonly date_posted: FieldRef<"Jobs", 'DateTime'>
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
   * Jobs.list_ability
   */
  export type Jobs$list_abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    where?: List_abilityWhereInput
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    cursor?: List_abilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_abilityScalarFieldEnum | List_abilityScalarFieldEnum[]
  }


  /**
   * Jobs.required_skills
   */
  export type Jobs$required_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    where?: Required_skillsWhereInput
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    cursor?: Required_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Required_skillsScalarFieldEnum | Required_skillsScalarFieldEnum[]
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
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
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
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: number
    name: string
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    job_seeker_skills?: boolean | Skills$job_seeker_skillsArgs<ExtArgs>
    required_skills?: boolean | Skills$required_skillsArgs<ExtArgs>
    _count?: boolean | SkillsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker_skills?: boolean | Skills$job_seeker_skillsArgs<ExtArgs>
    required_skills?: boolean | Skills$required_skillsArgs<ExtArgs>
    _count?: boolean | SkillsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      job_seeker_skills: Prisma.$Job_seeker_skillsPayload<ExtArgs>[]
      required_skills: Prisma.$Required_skillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }


  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
    **/
    create<T extends SkillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skills.
     *     @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skills = await prisma.skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
    **/
    delete<T extends SkillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
    **/
    upsert<T extends SkillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
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
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker_skills<T extends Skills$job_seeker_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skills$job_seeker_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    required_skills<T extends Skills$required_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skills$required_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Skills model
   */ 
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'Int'>
    readonly name: FieldRef<"Skills", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
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
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
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
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
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
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }


  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }


  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills.job_seeker_skills
   */
  export type Skills$job_seeker_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    where?: Job_seeker_skillsWhereInput
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    cursor?: Job_seeker_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_seeker_skillsScalarFieldEnum | Job_seeker_skillsScalarFieldEnum[]
  }


  /**
   * Skills.required_skills
   */
  export type Skills$required_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    where?: Required_skillsWhereInput
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    cursor?: Required_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Required_skillsScalarFieldEnum | Required_skillsScalarFieldEnum[]
  }


  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
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
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list_disability"]>

  export type List_disabilitySelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    disability_id?: boolean
  }

  export type List_disabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disability?: boolean | DisabilityDefaultArgs<ExtArgs>
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }


  export type $List_disabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_disability"
    objects: {
      disability: Prisma.$DisabilityPayload<ExtArgs>
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
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

    disability<T extends DisabilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisabilityDefaultArgs<ExtArgs>>): Prisma__DisabilityClient<$Result.GetResult<Prisma.$DisabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    cover_letter: string | null
  }

  export type Job_applicationMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    job_id: number | null
    company_id: number | null
    status: string | null
    cover_letter: string | null
  }

  export type Job_applicationCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: number
    cover_letter: number
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
    cover_letter?: true
  }

  export type Job_applicationMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
    status?: true
    cover_letter?: true
  }

  export type Job_applicationCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    job_id?: true
    company_id?: true
    status?: true
    cover_letter?: true
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
    cover_letter: string | null
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
    cover_letter?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_application"]>

  export type Job_applicationSelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    job_id?: boolean
    company_id?: boolean
    status?: boolean
    cover_letter?: boolean
  }

  export type Job_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
  }


  export type $Job_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_application"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      job: Prisma.$JobsPayload<ExtArgs>
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      job_id: number
      company_id: number
      status: string
      cover_letter: string | null
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

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Job_application model
   */ 
  interface Job_applicationFieldRefs {
    readonly id: FieldRef<"Job_application", 'Int'>
    readonly job_seeker_id: FieldRef<"Job_application", 'Int'>
    readonly job_id: FieldRef<"Job_application", 'Int'>
    readonly company_id: FieldRef<"Job_application", 'Int'>
    readonly status: FieldRef<"Job_application", 'String'>
    readonly cover_letter: FieldRef<"Job_application", 'String'>
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
    list_abilty?: boolean | Ability$list_abiltyArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_abilty?: boolean | Ability$list_abiltyArgs<ExtArgs>
    _count?: boolean | AbilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ability"
    objects: {
      list_abilty: Prisma.$List_abilityPayload<ExtArgs>[]
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

    list_abilty<T extends Ability$list_abiltyArgs<ExtArgs> = {}>(args?: Subset<T, Ability$list_abiltyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Ability.list_abilty
   */
  export type Ability$list_abiltyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    where?: List_abilityWhereInput
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    cursor?: List_abilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: List_abilityScalarFieldEnum | List_abilityScalarFieldEnum[]
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
   * Model List_ability
   */

  export type AggregateList_ability = {
    _count: List_abilityCountAggregateOutputType | null
    _avg: List_abilityAvgAggregateOutputType | null
    _sum: List_abilitySumAggregateOutputType | null
    _min: List_abilityMinAggregateOutputType | null
    _max: List_abilityMaxAggregateOutputType | null
  }

  export type List_abilityAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    ability_id: number | null
  }

  export type List_abilitySumAggregateOutputType = {
    id: number | null
    job_id: number | null
    ability_id: number | null
  }

  export type List_abilityMinAggregateOutputType = {
    id: number | null
    job_id: number | null
    ability_id: number | null
  }

  export type List_abilityMaxAggregateOutputType = {
    id: number | null
    job_id: number | null
    ability_id: number | null
  }

  export type List_abilityCountAggregateOutputType = {
    id: number
    job_id: number
    ability_id: number
    _all: number
  }


  export type List_abilityAvgAggregateInputType = {
    id?: true
    job_id?: true
    ability_id?: true
  }

  export type List_abilitySumAggregateInputType = {
    id?: true
    job_id?: true
    ability_id?: true
  }

  export type List_abilityMinAggregateInputType = {
    id?: true
    job_id?: true
    ability_id?: true
  }

  export type List_abilityMaxAggregateInputType = {
    id?: true
    job_id?: true
    ability_id?: true
  }

  export type List_abilityCountAggregateInputType = {
    id?: true
    job_id?: true
    ability_id?: true
    _all?: true
  }

  export type List_abilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_ability to aggregate.
     */
    where?: List_abilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_abilities to fetch.
     */
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: List_abilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned List_abilities
    **/
    _count?: true | List_abilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: List_abilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: List_abilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: List_abilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: List_abilityMaxAggregateInputType
  }

  export type GetList_abilityAggregateType<T extends List_abilityAggregateArgs> = {
        [P in keyof T & keyof AggregateList_ability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList_ability[P]>
      : GetScalarType<T[P], AggregateList_ability[P]>
  }




  export type List_abilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: List_abilityWhereInput
    orderBy?: List_abilityOrderByWithAggregationInput | List_abilityOrderByWithAggregationInput[]
    by: List_abilityScalarFieldEnum[] | List_abilityScalarFieldEnum
    having?: List_abilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: List_abilityCountAggregateInputType | true
    _avg?: List_abilityAvgAggregateInputType
    _sum?: List_abilitySumAggregateInputType
    _min?: List_abilityMinAggregateInputType
    _max?: List_abilityMaxAggregateInputType
  }

  export type List_abilityGroupByOutputType = {
    id: number
    job_id: number | null
    ability_id: number | null
    _count: List_abilityCountAggregateOutputType | null
    _avg: List_abilityAvgAggregateOutputType | null
    _sum: List_abilitySumAggregateOutputType | null
    _min: List_abilityMinAggregateOutputType | null
    _max: List_abilityMaxAggregateOutputType | null
  }

  type GetList_abilityGroupByPayload<T extends List_abilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<List_abilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof List_abilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], List_abilityGroupByOutputType[P]>
            : GetScalarType<T[P], List_abilityGroupByOutputType[P]>
        }
      >
    >


  export type List_abilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    ability_id?: boolean
    job?: boolean | List_ability$jobArgs<ExtArgs>
    ability?: boolean | List_ability$abilityArgs<ExtArgs>
  }, ExtArgs["result"]["list_ability"]>

  export type List_abilitySelectScalar = {
    id?: boolean
    job_id?: boolean
    ability_id?: boolean
  }

  export type List_abilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | List_ability$jobArgs<ExtArgs>
    ability?: boolean | List_ability$abilityArgs<ExtArgs>
  }


  export type $List_abilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List_ability"
    objects: {
      job: Prisma.$JobsPayload<ExtArgs> | null
      ability: Prisma.$AbilityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_id: number | null
      ability_id: number | null
    }, ExtArgs["result"]["list_ability"]>
    composites: {}
  }


  type List_abilityGetPayload<S extends boolean | null | undefined | List_abilityDefaultArgs> = $Result.GetResult<Prisma.$List_abilityPayload, S>

  type List_abilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<List_abilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: List_abilityCountAggregateInputType | true
    }

  export interface List_abilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List_ability'], meta: { name: 'List_ability' } }
    /**
     * Find zero or one List_ability that matches the filter.
     * @param {List_abilityFindUniqueArgs} args - Arguments to find a List_ability
     * @example
     * // Get one List_ability
     * const list_ability = await prisma.list_ability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends List_abilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityFindUniqueArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List_ability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {List_abilityFindUniqueOrThrowArgs} args - Arguments to find a List_ability
     * @example
     * // Get one List_ability
     * const list_ability = await prisma.list_ability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends List_abilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List_ability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityFindFirstArgs} args - Arguments to find a List_ability
     * @example
     * // Get one List_ability
     * const list_ability = await prisma.list_ability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends List_abilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityFindFirstArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List_ability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityFindFirstOrThrowArgs} args - Arguments to find a List_ability
     * @example
     * // Get one List_ability
     * const list_ability = await prisma.list_ability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends List_abilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more List_abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all List_abilities
     * const list_abilities = await prisma.list_ability.findMany()
     * 
     * // Get first 10 List_abilities
     * const list_abilities = await prisma.list_ability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const list_abilityWithIdOnly = await prisma.list_ability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends List_abilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List_ability.
     * @param {List_abilityCreateArgs} args - Arguments to create a List_ability.
     * @example
     * // Create one List_ability
     * const List_ability = await prisma.list_ability.create({
     *   data: {
     *     // ... data to create a List_ability
     *   }
     * })
     * 
    **/
    create<T extends List_abilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityCreateArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many List_abilities.
     *     @param {List_abilityCreateManyArgs} args - Arguments to create many List_abilities.
     *     @example
     *     // Create many List_abilities
     *     const list_ability = await prisma.list_ability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends List_abilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List_ability.
     * @param {List_abilityDeleteArgs} args - Arguments to delete one List_ability.
     * @example
     * // Delete one List_ability
     * const List_ability = await prisma.list_ability.delete({
     *   where: {
     *     // ... filter to delete one List_ability
     *   }
     * })
     * 
    **/
    delete<T extends List_abilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityDeleteArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List_ability.
     * @param {List_abilityUpdateArgs} args - Arguments to update one List_ability.
     * @example
     * // Update one List_ability
     * const list_ability = await prisma.list_ability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends List_abilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityUpdateArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more List_abilities.
     * @param {List_abilityDeleteManyArgs} args - Arguments to filter List_abilities to delete.
     * @example
     * // Delete a few List_abilities
     * const { count } = await prisma.list_ability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends List_abilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, List_abilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more List_abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many List_abilities
     * const list_ability = await prisma.list_ability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends List_abilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List_ability.
     * @param {List_abilityUpsertArgs} args - Arguments to update or create a List_ability.
     * @example
     * // Update or create a List_ability
     * const list_ability = await prisma.list_ability.upsert({
     *   create: {
     *     // ... data to create a List_ability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List_ability we want to update
     *   }
     * })
    **/
    upsert<T extends List_abilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, List_abilityUpsertArgs<ExtArgs>>
    ): Prisma__List_abilityClient<$Result.GetResult<Prisma.$List_abilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of List_abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityCountArgs} args - Arguments to filter List_abilities to count.
     * @example
     * // Count the number of List_abilities
     * const count = await prisma.list_ability.count({
     *   where: {
     *     // ... the filter for the List_abilities we want to count
     *   }
     * })
    **/
    count<T extends List_abilityCountArgs>(
      args?: Subset<T, List_abilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], List_abilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List_ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends List_abilityAggregateArgs>(args: Subset<T, List_abilityAggregateArgs>): Prisma.PrismaPromise<GetList_abilityAggregateType<T>>

    /**
     * Group by List_ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {List_abilityGroupByArgs} args - Group by arguments.
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
      T extends List_abilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: List_abilityGroupByArgs['orderBy'] }
        : { orderBy?: List_abilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, List_abilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetList_abilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List_ability model
   */
  readonly fields: List_abilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List_ability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__List_abilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends List_ability$jobArgs<ExtArgs> = {}>(args?: Subset<T, List_ability$jobArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ability<T extends List_ability$abilityArgs<ExtArgs> = {}>(args?: Subset<T, List_ability$abilityArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the List_ability model
   */ 
  interface List_abilityFieldRefs {
    readonly id: FieldRef<"List_ability", 'Int'>
    readonly job_id: FieldRef<"List_ability", 'Int'>
    readonly ability_id: FieldRef<"List_ability", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * List_ability findUnique
   */
  export type List_abilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter, which List_ability to fetch.
     */
    where: List_abilityWhereUniqueInput
  }


  /**
   * List_ability findUniqueOrThrow
   */
  export type List_abilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter, which List_ability to fetch.
     */
    where: List_abilityWhereUniqueInput
  }


  /**
   * List_ability findFirst
   */
  export type List_abilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter, which List_ability to fetch.
     */
    where?: List_abilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_abilities to fetch.
     */
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_abilities.
     */
    cursor?: List_abilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_abilities.
     */
    distinct?: List_abilityScalarFieldEnum | List_abilityScalarFieldEnum[]
  }


  /**
   * List_ability findFirstOrThrow
   */
  export type List_abilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter, which List_ability to fetch.
     */
    where?: List_abilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_abilities to fetch.
     */
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for List_abilities.
     */
    cursor?: List_abilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of List_abilities.
     */
    distinct?: List_abilityScalarFieldEnum | List_abilityScalarFieldEnum[]
  }


  /**
   * List_ability findMany
   */
  export type List_abilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter, which List_abilities to fetch.
     */
    where?: List_abilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of List_abilities to fetch.
     */
    orderBy?: List_abilityOrderByWithRelationInput | List_abilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing List_abilities.
     */
    cursor?: List_abilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` List_abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` List_abilities.
     */
    skip?: number
    distinct?: List_abilityScalarFieldEnum | List_abilityScalarFieldEnum[]
  }


  /**
   * List_ability create
   */
  export type List_abilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * The data needed to create a List_ability.
     */
    data?: XOR<List_abilityCreateInput, List_abilityUncheckedCreateInput>
  }


  /**
   * List_ability createMany
   */
  export type List_abilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many List_abilities.
     */
    data: List_abilityCreateManyInput | List_abilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List_ability update
   */
  export type List_abilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * The data needed to update a List_ability.
     */
    data: XOR<List_abilityUpdateInput, List_abilityUncheckedUpdateInput>
    /**
     * Choose, which List_ability to update.
     */
    where: List_abilityWhereUniqueInput
  }


  /**
   * List_ability updateMany
   */
  export type List_abilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update List_abilities.
     */
    data: XOR<List_abilityUpdateManyMutationInput, List_abilityUncheckedUpdateManyInput>
    /**
     * Filter which List_abilities to update
     */
    where?: List_abilityWhereInput
  }


  /**
   * List_ability upsert
   */
  export type List_abilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * The filter to search for the List_ability to update in case it exists.
     */
    where: List_abilityWhereUniqueInput
    /**
     * In case the List_ability found by the `where` argument doesn't exist, create a new List_ability with this data.
     */
    create: XOR<List_abilityCreateInput, List_abilityUncheckedCreateInput>
    /**
     * In case the List_ability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<List_abilityUpdateInput, List_abilityUncheckedUpdateInput>
  }


  /**
   * List_ability delete
   */
  export type List_abilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
    /**
     * Filter which List_ability to delete.
     */
    where: List_abilityWhereUniqueInput
  }


  /**
   * List_ability deleteMany
   */
  export type List_abilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List_abilities to delete
     */
    where?: List_abilityWhereInput
  }


  /**
   * List_ability.job
   */
  export type List_ability$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobsInclude<ExtArgs> | null
    where?: JobsWhereInput
  }


  /**
   * List_ability.ability
   */
  export type List_ability$abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * List_ability without action
   */
  export type List_abilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List_ability
     */
    select?: List_abilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: List_abilityInclude<ExtArgs> | null
  }



  /**
   * Model Job_seeker_skills
   */

  export type AggregateJob_seeker_skills = {
    _count: Job_seeker_skillsCountAggregateOutputType | null
    _avg: Job_seeker_skillsAvgAggregateOutputType | null
    _sum: Job_seeker_skillsSumAggregateOutputType | null
    _min: Job_seeker_skillsMinAggregateOutputType | null
    _max: Job_seeker_skillsMaxAggregateOutputType | null
  }

  export type Job_seeker_skillsAvgAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skill_id: number | null
  }

  export type Job_seeker_skillsSumAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skill_id: number | null
  }

  export type Job_seeker_skillsMinAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skill_id: number | null
  }

  export type Job_seeker_skillsMaxAggregateOutputType = {
    id: number | null
    job_seeker_id: number | null
    skill_id: number | null
  }

  export type Job_seeker_skillsCountAggregateOutputType = {
    id: number
    job_seeker_id: number
    skill_id: number
    _all: number
  }


  export type Job_seeker_skillsAvgAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skill_id?: true
  }

  export type Job_seeker_skillsSumAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skill_id?: true
  }

  export type Job_seeker_skillsMinAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skill_id?: true
  }

  export type Job_seeker_skillsMaxAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skill_id?: true
  }

  export type Job_seeker_skillsCountAggregateInputType = {
    id?: true
    job_seeker_id?: true
    skill_id?: true
    _all?: true
  }

  export type Job_seeker_skillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_seeker_skills to aggregate.
     */
    where?: Job_seeker_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seeker_skills to fetch.
     */
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_seeker_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seeker_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seeker_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_seeker_skills
    **/
    _count?: true | Job_seeker_skillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_seeker_skillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_seeker_skillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_seeker_skillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_seeker_skillsMaxAggregateInputType
  }

  export type GetJob_seeker_skillsAggregateType<T extends Job_seeker_skillsAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_seeker_skills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_seeker_skills[P]>
      : GetScalarType<T[P], AggregateJob_seeker_skills[P]>
  }




  export type Job_seeker_skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_seeker_skillsWhereInput
    orderBy?: Job_seeker_skillsOrderByWithAggregationInput | Job_seeker_skillsOrderByWithAggregationInput[]
    by: Job_seeker_skillsScalarFieldEnum[] | Job_seeker_skillsScalarFieldEnum
    having?: Job_seeker_skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_seeker_skillsCountAggregateInputType | true
    _avg?: Job_seeker_skillsAvgAggregateInputType
    _sum?: Job_seeker_skillsSumAggregateInputType
    _min?: Job_seeker_skillsMinAggregateInputType
    _max?: Job_seeker_skillsMaxAggregateInputType
  }

  export type Job_seeker_skillsGroupByOutputType = {
    id: number
    job_seeker_id: number
    skill_id: number
    _count: Job_seeker_skillsCountAggregateOutputType | null
    _avg: Job_seeker_skillsAvgAggregateOutputType | null
    _sum: Job_seeker_skillsSumAggregateOutputType | null
    _min: Job_seeker_skillsMinAggregateOutputType | null
    _max: Job_seeker_skillsMaxAggregateOutputType | null
  }

  type GetJob_seeker_skillsGroupByPayload<T extends Job_seeker_skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_seeker_skillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_seeker_skillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_seeker_skillsGroupByOutputType[P]>
            : GetScalarType<T[P], Job_seeker_skillsGroupByOutputType[P]>
        }
      >
    >


  export type Job_seeker_skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_seeker_id?: boolean
    skill_id?: boolean
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    skills?: boolean | SkillsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_seeker_skills"]>

  export type Job_seeker_skillsSelectScalar = {
    id?: boolean
    job_seeker_id?: boolean
    skill_id?: boolean
  }

  export type Job_seeker_skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_seeker?: boolean | Job_seekerDefaultArgs<ExtArgs>
    skills?: boolean | SkillsDefaultArgs<ExtArgs>
  }


  export type $Job_seeker_skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_seeker_skills"
    objects: {
      job_seeker: Prisma.$Job_seekerPayload<ExtArgs>
      skills: Prisma.$SkillsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_seeker_id: number
      skill_id: number
    }, ExtArgs["result"]["job_seeker_skills"]>
    composites: {}
  }


  type Job_seeker_skillsGetPayload<S extends boolean | null | undefined | Job_seeker_skillsDefaultArgs> = $Result.GetResult<Prisma.$Job_seeker_skillsPayload, S>

  type Job_seeker_skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Job_seeker_skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Job_seeker_skillsCountAggregateInputType | true
    }

  export interface Job_seeker_skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_seeker_skills'], meta: { name: 'Job_seeker_skills' } }
    /**
     * Find zero or one Job_seeker_skills that matches the filter.
     * @param {Job_seeker_skillsFindUniqueArgs} args - Arguments to find a Job_seeker_skills
     * @example
     * // Get one Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Job_seeker_skillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsFindUniqueArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job_seeker_skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Job_seeker_skillsFindUniqueOrThrowArgs} args - Arguments to find a Job_seeker_skills
     * @example
     * // Get one Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Job_seeker_skillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job_seeker_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsFindFirstArgs} args - Arguments to find a Job_seeker_skills
     * @example
     * // Get one Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Job_seeker_skillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsFindFirstArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job_seeker_skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsFindFirstOrThrowArgs} args - Arguments to find a Job_seeker_skills
     * @example
     * // Get one Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Job_seeker_skillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Job_seeker_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findMany()
     * 
     * // Get first 10 Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_seeker_skillsWithIdOnly = await prisma.job_seeker_skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Job_seeker_skillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job_seeker_skills.
     * @param {Job_seeker_skillsCreateArgs} args - Arguments to create a Job_seeker_skills.
     * @example
     * // Create one Job_seeker_skills
     * const Job_seeker_skills = await prisma.job_seeker_skills.create({
     *   data: {
     *     // ... data to create a Job_seeker_skills
     *   }
     * })
     * 
    **/
    create<T extends Job_seeker_skillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsCreateArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Job_seeker_skills.
     *     @param {Job_seeker_skillsCreateManyArgs} args - Arguments to create many Job_seeker_skills.
     *     @example
     *     // Create many Job_seeker_skills
     *     const job_seeker_skills = await prisma.job_seeker_skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Job_seeker_skillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_seeker_skills.
     * @param {Job_seeker_skillsDeleteArgs} args - Arguments to delete one Job_seeker_skills.
     * @example
     * // Delete one Job_seeker_skills
     * const Job_seeker_skills = await prisma.job_seeker_skills.delete({
     *   where: {
     *     // ... filter to delete one Job_seeker_skills
     *   }
     * })
     * 
    **/
    delete<T extends Job_seeker_skillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsDeleteArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job_seeker_skills.
     * @param {Job_seeker_skillsUpdateArgs} args - Arguments to update one Job_seeker_skills.
     * @example
     * // Update one Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Job_seeker_skillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsUpdateArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Job_seeker_skills.
     * @param {Job_seeker_skillsDeleteManyArgs} args - Arguments to filter Job_seeker_skills to delete.
     * @example
     * // Delete a few Job_seeker_skills
     * const { count } = await prisma.job_seeker_skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Job_seeker_skillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Job_seeker_skillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_seeker_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Job_seeker_skillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_seeker_skills.
     * @param {Job_seeker_skillsUpsertArgs} args - Arguments to update or create a Job_seeker_skills.
     * @example
     * // Update or create a Job_seeker_skills
     * const job_seeker_skills = await prisma.job_seeker_skills.upsert({
     *   create: {
     *     // ... data to create a Job_seeker_skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_seeker_skills we want to update
     *   }
     * })
    **/
    upsert<T extends Job_seeker_skillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Job_seeker_skillsUpsertArgs<ExtArgs>>
    ): Prisma__Job_seeker_skillsClient<$Result.GetResult<Prisma.$Job_seeker_skillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Job_seeker_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsCountArgs} args - Arguments to filter Job_seeker_skills to count.
     * @example
     * // Count the number of Job_seeker_skills
     * const count = await prisma.job_seeker_skills.count({
     *   where: {
     *     // ... the filter for the Job_seeker_skills we want to count
     *   }
     * })
    **/
    count<T extends Job_seeker_skillsCountArgs>(
      args?: Subset<T, Job_seeker_skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_seeker_skillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_seeker_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_seeker_skillsAggregateArgs>(args: Subset<T, Job_seeker_skillsAggregateArgs>): Prisma.PrismaPromise<GetJob_seeker_skillsAggregateType<T>>

    /**
     * Group by Job_seeker_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_seeker_skillsGroupByArgs} args - Group by arguments.
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
      T extends Job_seeker_skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_seeker_skillsGroupByArgs['orderBy'] }
        : { orderBy?: Job_seeker_skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Job_seeker_skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_seeker_skillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_seeker_skills model
   */
  readonly fields: Job_seeker_skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_seeker_skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_seeker_skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_seeker<T extends Job_seekerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_seekerDefaultArgs<ExtArgs>>): Prisma__Job_seekerClient<$Result.GetResult<Prisma.$Job_seekerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    skills<T extends SkillsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillsDefaultArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Job_seeker_skills model
   */ 
  interface Job_seeker_skillsFieldRefs {
    readonly id: FieldRef<"Job_seeker_skills", 'Int'>
    readonly job_seeker_id: FieldRef<"Job_seeker_skills", 'Int'>
    readonly skill_id: FieldRef<"Job_seeker_skills", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Job_seeker_skills findUnique
   */
  export type Job_seeker_skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker_skills to fetch.
     */
    where: Job_seeker_skillsWhereUniqueInput
  }


  /**
   * Job_seeker_skills findUniqueOrThrow
   */
  export type Job_seeker_skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker_skills to fetch.
     */
    where: Job_seeker_skillsWhereUniqueInput
  }


  /**
   * Job_seeker_skills findFirst
   */
  export type Job_seeker_skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker_skills to fetch.
     */
    where?: Job_seeker_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seeker_skills to fetch.
     */
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_seeker_skills.
     */
    cursor?: Job_seeker_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seeker_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seeker_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_seeker_skills.
     */
    distinct?: Job_seeker_skillsScalarFieldEnum | Job_seeker_skillsScalarFieldEnum[]
  }


  /**
   * Job_seeker_skills findFirstOrThrow
   */
  export type Job_seeker_skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker_skills to fetch.
     */
    where?: Job_seeker_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seeker_skills to fetch.
     */
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_seeker_skills.
     */
    cursor?: Job_seeker_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seeker_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seeker_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_seeker_skills.
     */
    distinct?: Job_seeker_skillsScalarFieldEnum | Job_seeker_skillsScalarFieldEnum[]
  }


  /**
   * Job_seeker_skills findMany
   */
  export type Job_seeker_skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Job_seeker_skills to fetch.
     */
    where?: Job_seeker_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_seeker_skills to fetch.
     */
    orderBy?: Job_seeker_skillsOrderByWithRelationInput | Job_seeker_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_seeker_skills.
     */
    cursor?: Job_seeker_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_seeker_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_seeker_skills.
     */
    skip?: number
    distinct?: Job_seeker_skillsScalarFieldEnum | Job_seeker_skillsScalarFieldEnum[]
  }


  /**
   * Job_seeker_skills create
   */
  export type Job_seeker_skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Job_seeker_skills.
     */
    data: XOR<Job_seeker_skillsCreateInput, Job_seeker_skillsUncheckedCreateInput>
  }


  /**
   * Job_seeker_skills createMany
   */
  export type Job_seeker_skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_seeker_skills.
     */
    data: Job_seeker_skillsCreateManyInput | Job_seeker_skillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job_seeker_skills update
   */
  export type Job_seeker_skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Job_seeker_skills.
     */
    data: XOR<Job_seeker_skillsUpdateInput, Job_seeker_skillsUncheckedUpdateInput>
    /**
     * Choose, which Job_seeker_skills to update.
     */
    where: Job_seeker_skillsWhereUniqueInput
  }


  /**
   * Job_seeker_skills updateMany
   */
  export type Job_seeker_skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_seeker_skills.
     */
    data: XOR<Job_seeker_skillsUpdateManyMutationInput, Job_seeker_skillsUncheckedUpdateManyInput>
    /**
     * Filter which Job_seeker_skills to update
     */
    where?: Job_seeker_skillsWhereInput
  }


  /**
   * Job_seeker_skills upsert
   */
  export type Job_seeker_skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Job_seeker_skills to update in case it exists.
     */
    where: Job_seeker_skillsWhereUniqueInput
    /**
     * In case the Job_seeker_skills found by the `where` argument doesn't exist, create a new Job_seeker_skills with this data.
     */
    create: XOR<Job_seeker_skillsCreateInput, Job_seeker_skillsUncheckedCreateInput>
    /**
     * In case the Job_seeker_skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_seeker_skillsUpdateInput, Job_seeker_skillsUncheckedUpdateInput>
  }


  /**
   * Job_seeker_skills delete
   */
  export type Job_seeker_skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
    /**
     * Filter which Job_seeker_skills to delete.
     */
    where: Job_seeker_skillsWhereUniqueInput
  }


  /**
   * Job_seeker_skills deleteMany
   */
  export type Job_seeker_skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_seeker_skills to delete
     */
    where?: Job_seeker_skillsWhereInput
  }


  /**
   * Job_seeker_skills without action
   */
  export type Job_seeker_skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_seeker_skills
     */
    select?: Job_seeker_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Job_seeker_skillsInclude<ExtArgs> | null
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
   * Model Required_skills
   */

  export type AggregateRequired_skills = {
    _count: Required_skillsCountAggregateOutputType | null
    _avg: Required_skillsAvgAggregateOutputType | null
    _sum: Required_skillsSumAggregateOutputType | null
    _min: Required_skillsMinAggregateOutputType | null
    _max: Required_skillsMaxAggregateOutputType | null
  }

  export type Required_skillsAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type Required_skillsSumAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type Required_skillsMinAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type Required_skillsMaxAggregateOutputType = {
    id: number | null
    job_id: number | null
    skill_id: number | null
  }

  export type Required_skillsCountAggregateOutputType = {
    id: number
    job_id: number
    skill_id: number
    _all: number
  }


  export type Required_skillsAvgAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type Required_skillsSumAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type Required_skillsMinAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type Required_skillsMaxAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
  }

  export type Required_skillsCountAggregateInputType = {
    id?: true
    job_id?: true
    skill_id?: true
    _all?: true
  }

  export type Required_skillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Required_skills to aggregate.
     */
    where?: Required_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Required_skills to fetch.
     */
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Required_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Required_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Required_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Required_skills
    **/
    _count?: true | Required_skillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Required_skillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Required_skillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Required_skillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Required_skillsMaxAggregateInputType
  }

  export type GetRequired_skillsAggregateType<T extends Required_skillsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequired_skills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequired_skills[P]>
      : GetScalarType<T[P], AggregateRequired_skills[P]>
  }




  export type Required_skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Required_skillsWhereInput
    orderBy?: Required_skillsOrderByWithAggregationInput | Required_skillsOrderByWithAggregationInput[]
    by: Required_skillsScalarFieldEnum[] | Required_skillsScalarFieldEnum
    having?: Required_skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Required_skillsCountAggregateInputType | true
    _avg?: Required_skillsAvgAggregateInputType
    _sum?: Required_skillsSumAggregateInputType
    _min?: Required_skillsMinAggregateInputType
    _max?: Required_skillsMaxAggregateInputType
  }

  export type Required_skillsGroupByOutputType = {
    id: number
    job_id: number
    skill_id: number
    _count: Required_skillsCountAggregateOutputType | null
    _avg: Required_skillsAvgAggregateOutputType | null
    _sum: Required_skillsSumAggregateOutputType | null
    _min: Required_skillsMinAggregateOutputType | null
    _max: Required_skillsMaxAggregateOutputType | null
  }

  type GetRequired_skillsGroupByPayload<T extends Required_skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Required_skillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Required_skillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Required_skillsGroupByOutputType[P]>
            : GetScalarType<T[P], Required_skillsGroupByOutputType[P]>
        }
      >
    >


  export type Required_skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobsDefaultArgs<ExtArgs>
    skills?: boolean | SkillsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["required_skills"]>

  export type Required_skillsSelectScalar = {
    id?: boolean
    job_id?: boolean
    skill_id?: boolean
  }

  export type Required_skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobsDefaultArgs<ExtArgs>
    skills?: boolean | SkillsDefaultArgs<ExtArgs>
  }


  export type $Required_skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Required_skills"
    objects: {
      job: Prisma.$JobsPayload<ExtArgs>
      skills: Prisma.$SkillsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_id: number
      skill_id: number
    }, ExtArgs["result"]["required_skills"]>
    composites: {}
  }


  type Required_skillsGetPayload<S extends boolean | null | undefined | Required_skillsDefaultArgs> = $Result.GetResult<Prisma.$Required_skillsPayload, S>

  type Required_skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Required_skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Required_skillsCountAggregateInputType | true
    }

  export interface Required_skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Required_skills'], meta: { name: 'Required_skills' } }
    /**
     * Find zero or one Required_skills that matches the filter.
     * @param {Required_skillsFindUniqueArgs} args - Arguments to find a Required_skills
     * @example
     * // Get one Required_skills
     * const required_skills = await prisma.required_skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Required_skillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsFindUniqueArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Required_skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Required_skillsFindUniqueOrThrowArgs} args - Arguments to find a Required_skills
     * @example
     * // Get one Required_skills
     * const required_skills = await prisma.required_skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Required_skillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Required_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsFindFirstArgs} args - Arguments to find a Required_skills
     * @example
     * // Get one Required_skills
     * const required_skills = await prisma.required_skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Required_skillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsFindFirstArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Required_skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsFindFirstOrThrowArgs} args - Arguments to find a Required_skills
     * @example
     * // Get one Required_skills
     * const required_skills = await prisma.required_skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Required_skillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Required_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Required_skills
     * const required_skills = await prisma.required_skills.findMany()
     * 
     * // Get first 10 Required_skills
     * const required_skills = await prisma.required_skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const required_skillsWithIdOnly = await prisma.required_skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Required_skillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Required_skills.
     * @param {Required_skillsCreateArgs} args - Arguments to create a Required_skills.
     * @example
     * // Create one Required_skills
     * const Required_skills = await prisma.required_skills.create({
     *   data: {
     *     // ... data to create a Required_skills
     *   }
     * })
     * 
    **/
    create<T extends Required_skillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsCreateArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Required_skills.
     *     @param {Required_skillsCreateManyArgs} args - Arguments to create many Required_skills.
     *     @example
     *     // Create many Required_skills
     *     const required_skills = await prisma.required_skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Required_skillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Required_skills.
     * @param {Required_skillsDeleteArgs} args - Arguments to delete one Required_skills.
     * @example
     * // Delete one Required_skills
     * const Required_skills = await prisma.required_skills.delete({
     *   where: {
     *     // ... filter to delete one Required_skills
     *   }
     * })
     * 
    **/
    delete<T extends Required_skillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsDeleteArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Required_skills.
     * @param {Required_skillsUpdateArgs} args - Arguments to update one Required_skills.
     * @example
     * // Update one Required_skills
     * const required_skills = await prisma.required_skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Required_skillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsUpdateArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Required_skills.
     * @param {Required_skillsDeleteManyArgs} args - Arguments to filter Required_skills to delete.
     * @example
     * // Delete a few Required_skills
     * const { count } = await prisma.required_skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Required_skillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Required_skillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Required_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Required_skills
     * const required_skills = await prisma.required_skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Required_skillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Required_skills.
     * @param {Required_skillsUpsertArgs} args - Arguments to update or create a Required_skills.
     * @example
     * // Update or create a Required_skills
     * const required_skills = await prisma.required_skills.upsert({
     *   create: {
     *     // ... data to create a Required_skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Required_skills we want to update
     *   }
     * })
    **/
    upsert<T extends Required_skillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Required_skillsUpsertArgs<ExtArgs>>
    ): Prisma__Required_skillsClient<$Result.GetResult<Prisma.$Required_skillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Required_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsCountArgs} args - Arguments to filter Required_skills to count.
     * @example
     * // Count the number of Required_skills
     * const count = await prisma.required_skills.count({
     *   where: {
     *     // ... the filter for the Required_skills we want to count
     *   }
     * })
    **/
    count<T extends Required_skillsCountArgs>(
      args?: Subset<T, Required_skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Required_skillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Required_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Required_skillsAggregateArgs>(args: Subset<T, Required_skillsAggregateArgs>): Prisma.PrismaPromise<GetRequired_skillsAggregateType<T>>

    /**
     * Group by Required_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Required_skillsGroupByArgs} args - Group by arguments.
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
      T extends Required_skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Required_skillsGroupByArgs['orderBy'] }
        : { orderBy?: Required_skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Required_skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequired_skillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Required_skills model
   */
  readonly fields: Required_skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Required_skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Required_skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    skills<T extends SkillsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillsDefaultArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Required_skills model
   */ 
  interface Required_skillsFieldRefs {
    readonly id: FieldRef<"Required_skills", 'Int'>
    readonly job_id: FieldRef<"Required_skills", 'Int'>
    readonly skill_id: FieldRef<"Required_skills", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Required_skills findUnique
   */
  export type Required_skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Required_skills to fetch.
     */
    where: Required_skillsWhereUniqueInput
  }


  /**
   * Required_skills findUniqueOrThrow
   */
  export type Required_skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Required_skills to fetch.
     */
    where: Required_skillsWhereUniqueInput
  }


  /**
   * Required_skills findFirst
   */
  export type Required_skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Required_skills to fetch.
     */
    where?: Required_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Required_skills to fetch.
     */
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Required_skills.
     */
    cursor?: Required_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Required_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Required_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Required_skills.
     */
    distinct?: Required_skillsScalarFieldEnum | Required_skillsScalarFieldEnum[]
  }


  /**
   * Required_skills findFirstOrThrow
   */
  export type Required_skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Required_skills to fetch.
     */
    where?: Required_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Required_skills to fetch.
     */
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Required_skills.
     */
    cursor?: Required_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Required_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Required_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Required_skills.
     */
    distinct?: Required_skillsScalarFieldEnum | Required_skillsScalarFieldEnum[]
  }


  /**
   * Required_skills findMany
   */
  export type Required_skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Required_skills to fetch.
     */
    where?: Required_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Required_skills to fetch.
     */
    orderBy?: Required_skillsOrderByWithRelationInput | Required_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Required_skills.
     */
    cursor?: Required_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Required_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Required_skills.
     */
    skip?: number
    distinct?: Required_skillsScalarFieldEnum | Required_skillsScalarFieldEnum[]
  }


  /**
   * Required_skills create
   */
  export type Required_skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Required_skills.
     */
    data: XOR<Required_skillsCreateInput, Required_skillsUncheckedCreateInput>
  }


  /**
   * Required_skills createMany
   */
  export type Required_skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Required_skills.
     */
    data: Required_skillsCreateManyInput | Required_skillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Required_skills update
   */
  export type Required_skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Required_skills.
     */
    data: XOR<Required_skillsUpdateInput, Required_skillsUncheckedUpdateInput>
    /**
     * Choose, which Required_skills to update.
     */
    where: Required_skillsWhereUniqueInput
  }


  /**
   * Required_skills updateMany
   */
  export type Required_skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Required_skills.
     */
    data: XOR<Required_skillsUpdateManyMutationInput, Required_skillsUncheckedUpdateManyInput>
    /**
     * Filter which Required_skills to update
     */
    where?: Required_skillsWhereInput
  }


  /**
   * Required_skills upsert
   */
  export type Required_skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Required_skills to update in case it exists.
     */
    where: Required_skillsWhereUniqueInput
    /**
     * In case the Required_skills found by the `where` argument doesn't exist, create a new Required_skills with this data.
     */
    create: XOR<Required_skillsCreateInput, Required_skillsUncheckedCreateInput>
    /**
     * In case the Required_skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Required_skillsUpdateInput, Required_skillsUncheckedUpdateInput>
  }


  /**
   * Required_skills delete
   */
  export type Required_skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
    /**
     * Filter which Required_skills to delete.
     */
    where: Required_skillsWhereUniqueInput
  }


  /**
   * Required_skills deleteMany
   */
  export type Required_skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Required_skills to delete
     */
    where?: Required_skillsWhereInput
  }


  /**
   * Required_skills without action
   */
  export type Required_skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Required_skills
     */
    select?: Required_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Required_skillsInclude<ExtArgs> | null
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
    phone_number: 'phone_number',
    city: 'city',
    dob: 'dob',
    gender: 'gender',
    description: 'description'
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
    employment_type: 'employment_type',
    min_salary: 'min_salary',
    gender: 'gender',
    max_salary: 'max_salary',
    date_posted: 'date_posted'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const List_certificateScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    name: 'name',
    description: 'description'
  };

  export type List_certificateScalarFieldEnum = (typeof List_certificateScalarFieldEnum)[keyof typeof List_certificateScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


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
    status: 'status',
    cover_letter: 'cover_letter'
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


  export const List_abilityScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    ability_id: 'ability_id'
  };

  export type List_abilityScalarFieldEnum = (typeof List_abilityScalarFieldEnum)[keyof typeof List_abilityScalarFieldEnum]


  export const Job_seeker_skillsScalarFieldEnum: {
    id: 'id',
    job_seeker_id: 'job_seeker_id',
    skill_id: 'skill_id'
  };

  export type Job_seeker_skillsScalarFieldEnum = (typeof Job_seeker_skillsScalarFieldEnum)[keyof typeof Job_seeker_skillsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Required_skillsScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    skill_id: 'skill_id'
  };

  export type Required_skillsScalarFieldEnum = (typeof Required_skillsScalarFieldEnum)[keyof typeof Required_skillsScalarFieldEnum]


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
    company?: CompanyListRelationFilter
    job_seeker?: Job_seekerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    company?: CompanyOrderByRelationAggregateInput
    job_seeker?: Job_seekerOrderByRelationAggregateInput
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
    company?: CompanyListRelationFilter
    job_seeker?: Job_seekerListRelationFilter
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
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    description?: StringNullableFilter<"Job_seeker"> | string | null
    job_applications?: Job_applicationListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    job_seeker_skills?: Job_seeker_skillsListRelationFilter
    certificates?: List_certificateListRelationFilter
    disabilities?: List_disabilityListRelationFilter
  }

  export type Job_seekerOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    dob?: SortOrder
    gender?: SortOrder
    description?: SortOrderInput | SortOrder
    job_applications?: Job_applicationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    job_seeker_skills?: Job_seeker_skillsOrderByRelationAggregateInput
    certificates?: List_certificateOrderByRelationAggregateInput
    disabilities?: List_disabilityOrderByRelationAggregateInput
  }

  export type Job_seekerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Job_seekerWhereInput | Job_seekerWhereInput[]
    OR?: Job_seekerWhereInput[]
    NOT?: Job_seekerWhereInput | Job_seekerWhereInput[]
    user_id?: IntFilter<"Job_seeker"> | number
    fullname?: StringFilter<"Job_seeker"> | string
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    description?: StringNullableFilter<"Job_seeker"> | string | null
    job_applications?: Job_applicationListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    job_seeker_skills?: Job_seeker_skillsListRelationFilter
    certificates?: List_certificateListRelationFilter
    disabilities?: List_disabilityListRelationFilter
  }, "id">

  export type Job_seekerOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    dob?: SortOrder
    gender?: SortOrder
    description?: SortOrderInput | SortOrder
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
    phone_number?: StringNullableWithAggregatesFilter<"Job_seeker"> | string | null
    city?: StringNullableWithAggregatesFilter<"Job_seeker"> | string | null
    dob?: DateTimeWithAggregatesFilter<"Job_seeker"> | Date | string
    gender?: StringWithAggregatesFilter<"Job_seeker"> | string
    description?: StringNullableWithAggregatesFilter<"Job_seeker"> | string | null
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
    job_application?: Job_applicationListRelationFilter
    jobs?: JobsListRelationFilter
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
    job_application?: Job_applicationOrderByRelationAggregateInput
    jobs?: JobsOrderByRelationAggregateInput
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
    job_application?: Job_applicationListRelationFilter
    jobs?: JobsListRelationFilter
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
    employment_type?: StringFilter<"Jobs"> | string
    min_salary?: IntNullableFilter<"Jobs"> | number | null
    gender?: StringNullableFilter<"Jobs"> | string | null
    max_salary?: IntNullableFilter<"Jobs"> | number | null
    date_posted?: DateTimeNullableFilter<"Jobs"> | Date | string | null
    jobApplications?: Job_applicationListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    list_ability?: List_abilityListRelationFilter
    required_skills?: Required_skillsListRelationFilter
  }

  export type JobsOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    min_salary?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    max_salary?: SortOrderInput | SortOrder
    date_posted?: SortOrderInput | SortOrder
    jobApplications?: Job_applicationOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    list_ability?: List_abilityOrderByRelationAggregateInput
    required_skills?: Required_skillsOrderByRelationAggregateInput
  }

  export type JobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    company_id?: IntFilter<"Jobs"> | number
    title?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    employment_type?: StringFilter<"Jobs"> | string
    min_salary?: IntNullableFilter<"Jobs"> | number | null
    gender?: StringNullableFilter<"Jobs"> | string | null
    max_salary?: IntNullableFilter<"Jobs"> | number | null
    date_posted?: DateTimeNullableFilter<"Jobs"> | Date | string | null
    jobApplications?: Job_applicationListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    list_ability?: List_abilityListRelationFilter
    required_skills?: Required_skillsListRelationFilter
  }, "id">

  export type JobsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    min_salary?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    max_salary?: SortOrderInput | SortOrder
    date_posted?: SortOrderInput | SortOrder
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
    employment_type?: StringWithAggregatesFilter<"Jobs"> | string
    min_salary?: IntNullableWithAggregatesFilter<"Jobs"> | number | null
    gender?: StringNullableWithAggregatesFilter<"Jobs"> | string | null
    max_salary?: IntNullableWithAggregatesFilter<"Jobs"> | number | null
    date_posted?: DateTimeNullableWithAggregatesFilter<"Jobs"> | Date | string | null
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

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: IntFilter<"Skills"> | number
    name?: StringFilter<"Skills"> | string
    job_seeker_skills?: Job_seeker_skillsListRelationFilter
    required_skills?: Required_skillsListRelationFilter
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    job_seeker_skills?: Job_seeker_skillsOrderByRelationAggregateInput
    required_skills?: Required_skillsOrderByRelationAggregateInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    name?: StringFilter<"Skills"> | string
    job_seeker_skills?: Job_seeker_skillsListRelationFilter
    required_skills?: Required_skillsListRelationFilter
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skills"> | number
    name?: StringWithAggregatesFilter<"Skills"> | string
  }

  export type List_disabilityWhereInput = {
    AND?: List_disabilityWhereInput | List_disabilityWhereInput[]
    OR?: List_disabilityWhereInput[]
    NOT?: List_disabilityWhereInput | List_disabilityWhereInput[]
    id?: IntFilter<"List_disability"> | number
    job_seeker_id?: IntFilter<"List_disability"> | number
    disability_id?: IntFilter<"List_disability"> | number
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
  }

  export type List_disabilityOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    disability_id?: SortOrder
    disability?: DisabilityOrderByWithRelationInput
    job_seeker?: Job_seekerOrderByWithRelationInput
  }

  export type List_disabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_disabilityWhereInput | List_disabilityWhereInput[]
    OR?: List_disabilityWhereInput[]
    NOT?: List_disabilityWhereInput | List_disabilityWhereInput[]
    job_seeker_id?: IntFilter<"List_disability"> | number
    disability_id?: IntFilter<"List_disability"> | number
    disability?: XOR<DisabilityRelationFilter, DisabilityWhereInput>
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
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
    cover_letter?: StringNullableFilter<"Job_application"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
  }

  export type Job_applicationOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    cover_letter?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    job?: JobsOrderByWithRelationInput
    job_seeker?: Job_seekerOrderByWithRelationInput
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
    cover_letter?: StringNullableFilter<"Job_application"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
  }, "id">

  export type Job_applicationOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    cover_letter?: SortOrderInput | SortOrder
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
    cover_letter?: StringNullableWithAggregatesFilter<"Job_application"> | string | null
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
    list_abilty?: List_abilityListRelationFilter
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    list_abilty?: List_abilityOrderByRelationAggregateInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    name?: StringFilter<"Ability"> | string
    list_abilty?: List_abilityListRelationFilter
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

  export type List_abilityWhereInput = {
    AND?: List_abilityWhereInput | List_abilityWhereInput[]
    OR?: List_abilityWhereInput[]
    NOT?: List_abilityWhereInput | List_abilityWhereInput[]
    id?: IntFilter<"List_ability"> | number
    job_id?: IntNullableFilter<"List_ability"> | number | null
    ability_id?: IntNullableFilter<"List_ability"> | number | null
    job?: XOR<JobsNullableRelationFilter, JobsWhereInput> | null
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
  }

  export type List_abilityOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    job?: JobsOrderByWithRelationInput
    ability?: AbilityOrderByWithRelationInput
  }

  export type List_abilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: List_abilityWhereInput | List_abilityWhereInput[]
    OR?: List_abilityWhereInput[]
    NOT?: List_abilityWhereInput | List_abilityWhereInput[]
    job_id?: IntNullableFilter<"List_ability"> | number | null
    ability_id?: IntNullableFilter<"List_ability"> | number | null
    job?: XOR<JobsNullableRelationFilter, JobsWhereInput> | null
    ability?: XOR<AbilityNullableRelationFilter, AbilityWhereInput> | null
  }, "id">

  export type List_abilityOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    ability_id?: SortOrderInput | SortOrder
    _count?: List_abilityCountOrderByAggregateInput
    _avg?: List_abilityAvgOrderByAggregateInput
    _max?: List_abilityMaxOrderByAggregateInput
    _min?: List_abilityMinOrderByAggregateInput
    _sum?: List_abilitySumOrderByAggregateInput
  }

  export type List_abilityScalarWhereWithAggregatesInput = {
    AND?: List_abilityScalarWhereWithAggregatesInput | List_abilityScalarWhereWithAggregatesInput[]
    OR?: List_abilityScalarWhereWithAggregatesInput[]
    NOT?: List_abilityScalarWhereWithAggregatesInput | List_abilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List_ability"> | number
    job_id?: IntNullableWithAggregatesFilter<"List_ability"> | number | null
    ability_id?: IntNullableWithAggregatesFilter<"List_ability"> | number | null
  }

  export type Job_seeker_skillsWhereInput = {
    AND?: Job_seeker_skillsWhereInput | Job_seeker_skillsWhereInput[]
    OR?: Job_seeker_skillsWhereInput[]
    NOT?: Job_seeker_skillsWhereInput | Job_seeker_skillsWhereInput[]
    id?: IntFilter<"Job_seeker_skills"> | number
    job_seeker_id?: IntFilter<"Job_seeker_skills"> | number
    skill_id?: IntFilter<"Job_seeker_skills"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    skills?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }

  export type Job_seeker_skillsOrderByWithRelationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
    job_seeker?: Job_seekerOrderByWithRelationInput
    skills?: SkillsOrderByWithRelationInput
  }

  export type Job_seeker_skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Job_seeker_skillsWhereInput | Job_seeker_skillsWhereInput[]
    OR?: Job_seeker_skillsWhereInput[]
    NOT?: Job_seeker_skillsWhereInput | Job_seeker_skillsWhereInput[]
    job_seeker_id?: IntFilter<"Job_seeker_skills"> | number
    skill_id?: IntFilter<"Job_seeker_skills"> | number
    job_seeker?: XOR<Job_seekerRelationFilter, Job_seekerWhereInput>
    skills?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }, "id">

  export type Job_seeker_skillsOrderByWithAggregationInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
    _count?: Job_seeker_skillsCountOrderByAggregateInput
    _avg?: Job_seeker_skillsAvgOrderByAggregateInput
    _max?: Job_seeker_skillsMaxOrderByAggregateInput
    _min?: Job_seeker_skillsMinOrderByAggregateInput
    _sum?: Job_seeker_skillsSumOrderByAggregateInput
  }

  export type Job_seeker_skillsScalarWhereWithAggregatesInput = {
    AND?: Job_seeker_skillsScalarWhereWithAggregatesInput | Job_seeker_skillsScalarWhereWithAggregatesInput[]
    OR?: Job_seeker_skillsScalarWhereWithAggregatesInput[]
    NOT?: Job_seeker_skillsScalarWhereWithAggregatesInput | Job_seeker_skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job_seeker_skills"> | number
    job_seeker_id?: IntWithAggregatesFilter<"Job_seeker_skills"> | number
    skill_id?: IntWithAggregatesFilter<"Job_seeker_skills"> | number
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

  export type Required_skillsWhereInput = {
    AND?: Required_skillsWhereInput | Required_skillsWhereInput[]
    OR?: Required_skillsWhereInput[]
    NOT?: Required_skillsWhereInput | Required_skillsWhereInput[]
    id?: IntFilter<"Required_skills"> | number
    job_id?: IntFilter<"Required_skills"> | number
    skill_id?: IntFilter<"Required_skills"> | number
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    skills?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }

  export type Required_skillsOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    job?: JobsOrderByWithRelationInput
    skills?: SkillsOrderByWithRelationInput
  }

  export type Required_skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Required_skillsWhereInput | Required_skillsWhereInput[]
    OR?: Required_skillsWhereInput[]
    NOT?: Required_skillsWhereInput | Required_skillsWhereInput[]
    job_id?: IntFilter<"Required_skills"> | number
    skill_id?: IntFilter<"Required_skills"> | number
    job?: XOR<JobsRelationFilter, JobsWhereInput>
    skills?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }, "id">

  export type Required_skillsOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
    _count?: Required_skillsCountOrderByAggregateInput
    _avg?: Required_skillsAvgOrderByAggregateInput
    _max?: Required_skillsMaxOrderByAggregateInput
    _min?: Required_skillsMinOrderByAggregateInput
    _sum?: Required_skillsSumOrderByAggregateInput
  }

  export type Required_skillsScalarWhereWithAggregatesInput = {
    AND?: Required_skillsScalarWhereWithAggregatesInput | Required_skillsScalarWhereWithAggregatesInput[]
    OR?: Required_skillsScalarWhereWithAggregatesInput[]
    NOT?: Required_skillsScalarWhereWithAggregatesInput | Required_skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Required_skills"> | number
    job_id?: IntWithAggregatesFilter<"Required_skills"> | number
    skill_id?: IntWithAggregatesFilter<"Required_skills"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: string
    is_verified?: boolean
    company?: CompanyCreateNestedManyWithoutUserInput
    job_seeker?: Job_seekerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    is_verified?: boolean
    company?: CompanyUncheckedCreateNestedManyWithoutUserInput
    job_seeker?: Job_seekerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateManyWithoutUserNestedInput
    job_seeker?: Job_seekerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    job_seeker?: Job_seekerUncheckedUpdateManyWithoutUserNestedInput
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
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
    user: UserCreateNestedOneWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerCreateManyInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
  }

  export type Job_seekerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_seekerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    user: UserCreateNestedOneWithoutCompanyInput
    job_application?: Job_applicationCreateNestedManyWithoutCompanyInput
    jobs?: JobsCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    job_application?: Job_applicationUncheckedCreateNestedManyWithoutCompanyInput
    jobs?: JobsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    job_application?: Job_applicationUpdateManyWithoutCompanyNestedInput
    jobs?: JobsUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    job_application?: Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput
    jobs?: JobsUncheckedUpdateManyWithoutCompanyNestedInput
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
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
    company: CompanyCreateNestedOneWithoutJobsInput
    list_ability?: List_abilityCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
    list_ability?: List_abilityUncheckedCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    list_ability?: List_abilityUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
    list_ability?: List_abilityUncheckedUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsCreateManyInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
  }

  export type JobsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SkillsCreateInput = {
    name: string
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutSkillsInput
    required_skills?: Required_skillsCreateNestedManyWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: number
    name: string
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutSkillsInput
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutSkillsNestedInput
    required_skills?: Required_skillsUpdateManyWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutSkillsNestedInput
    required_skills?: Required_skillsUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type SkillsCreateManyInput = {
    id?: number
    name: string
  }

  export type SkillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type List_disabilityCreateInput = {
    disability: DisabilityCreateNestedOneWithoutList_disabilitiesInput
    job_seeker: Job_seekerCreateNestedOneWithoutDisabilitiesInput
  }

  export type List_disabilityUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    disability_id: number
  }

  export type List_disabilityUpdateInput = {
    disability?: DisabilityUpdateOneRequiredWithoutList_disabilitiesNestedInput
    job_seeker?: Job_seekerUpdateOneRequiredWithoutDisabilitiesNestedInput
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
    cover_letter?: string | null
    company: CompanyCreateNestedOneWithoutJob_applicationInput
    job: JobsCreateNestedOneWithoutJobApplicationsInput
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
  }

  export type Job_applicationUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_applicationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
  }

  export type Job_applicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationCreateManyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_applicationUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
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
    list_abilty?: List_abilityCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUncheckedCreateInput = {
    id?: number
    name: string
    list_abilty?: List_abilityUncheckedCreateNestedManyWithoutAbilityInput
  }

  export type AbilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    list_abilty?: List_abilityUpdateManyWithoutAbilityNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    list_abilty?: List_abilityUncheckedUpdateManyWithoutAbilityNestedInput
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

  export type List_abilityCreateInput = {
    job?: JobsCreateNestedOneWithoutList_abilityInput
    ability?: AbilityCreateNestedOneWithoutList_abiltyInput
  }

  export type List_abilityUncheckedCreateInput = {
    id?: number
    job_id?: number | null
    ability_id?: number | null
  }

  export type List_abilityUpdateInput = {
    job?: JobsUpdateOneWithoutList_abilityNestedInput
    ability?: AbilityUpdateOneWithoutList_abiltyNestedInput
  }

  export type List_abilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type List_abilityCreateManyInput = {
    id?: number
    job_id?: number | null
    ability_id?: number | null
  }

  export type List_abilityUpdateManyMutationInput = {

  }

  export type List_abilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Job_seeker_skillsCreateInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutJob_seeker_skillsInput
    skills: SkillsCreateNestedOneWithoutJob_seeker_skillsInput
  }

  export type Job_seeker_skillsUncheckedCreateInput = {
    id?: number
    job_seeker_id: number
    skill_id: number
  }

  export type Job_seeker_skillsUpdateInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_seeker_skillsNestedInput
    skills?: SkillsUpdateOneRequiredWithoutJob_seeker_skillsNestedInput
  }

  export type Job_seeker_skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_seeker_skillsCreateManyInput = {
    id?: number
    job_seeker_id: number
    skill_id: number
  }

  export type Job_seeker_skillsUpdateManyMutationInput = {

  }

  export type Job_seeker_skillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
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

  export type Required_skillsCreateInput = {
    job: JobsCreateNestedOneWithoutRequired_skillsInput
    skills: SkillsCreateNestedOneWithoutRequired_skillsInput
  }

  export type Required_skillsUncheckedCreateInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type Required_skillsUpdateInput = {
    job?: JobsUpdateOneRequiredWithoutRequired_skillsNestedInput
    skills?: SkillsUpdateOneRequiredWithoutRequired_skillsNestedInput
  }

  export type Required_skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Required_skillsCreateManyInput = {
    id?: number
    job_id: number
    skill_id: number
  }

  export type Required_skillsUpdateManyMutationInput = {

  }

  export type Required_skillsUncheckedUpdateManyInput = {
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

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type Job_seekerListRelationFilter = {
    every?: Job_seekerWhereInput
    some?: Job_seekerWhereInput
    none?: Job_seekerWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_seekerOrderByRelationAggregateInput = {
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

  export type Job_applicationListRelationFilter = {
    every?: Job_applicationWhereInput
    some?: Job_applicationWhereInput
    none?: Job_applicationWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Job_seeker_skillsListRelationFilter = {
    every?: Job_seeker_skillsWhereInput
    some?: Job_seeker_skillsWhereInput
    none?: Job_seeker_skillsWhereInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Job_applicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_seeker_skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type List_certificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type List_disabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_seekerCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    description?: SortOrder
  }

  export type Job_seekerAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Job_seekerMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    description?: SortOrder
  }

  export type Job_seekerMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    description?: SortOrder
  }

  export type Job_seekerSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type List_abilityListRelationFilter = {
    every?: List_abilityWhereInput
    some?: List_abilityWhereInput
    none?: List_abilityWhereInput
  }

  export type Required_skillsListRelationFilter = {
    every?: Required_skillsWhereInput
    some?: Required_skillsWhereInput
    none?: Required_skillsWhereInput
  }

  export type List_abilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Required_skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    min_salary?: SortOrder
    gender?: SortOrder
    max_salary?: SortOrder
    date_posted?: SortOrder
  }

  export type JobsAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    min_salary?: SortOrder
    gender?: SortOrder
    max_salary?: SortOrder
    date_posted?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    min_salary?: SortOrder
    gender?: SortOrder
    max_salary?: SortOrder
    date_posted?: SortOrder
  }

  export type JobsSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
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
    cover_letter?: SortOrder
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
    cover_letter?: SortOrder
  }

  export type Job_applicationMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    job_id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    cover_letter?: SortOrder
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

  export type JobsNullableRelationFilter = {
    is?: JobsWhereInput | null
    isNot?: JobsWhereInput | null
  }

  export type AbilityNullableRelationFilter = {
    is?: AbilityWhereInput | null
    isNot?: AbilityWhereInput | null
  }

  export type List_abilityCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    ability_id?: SortOrder
  }

  export type List_abilityAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    ability_id?: SortOrder
  }

  export type List_abilityMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    ability_id?: SortOrder
  }

  export type List_abilityMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    ability_id?: SortOrder
  }

  export type List_abilitySumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    ability_id?: SortOrder
  }

  export type SkillsRelationFilter = {
    is?: SkillsWhereInput
    isNot?: SkillsWhereInput
  }

  export type Job_seeker_skillsCountOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Job_seeker_skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Job_seeker_skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Job_seeker_skillsMinOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Job_seeker_skillsSumOrderByAggregateInput = {
    id?: SortOrder
    job_seeker_id?: SortOrder
    skill_id?: SortOrder
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

  export type Required_skillsCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Required_skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Required_skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Required_skillsMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type Required_skillsSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type Job_seekerCreateNestedManyWithoutUserInput = {
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

  export type Job_seekerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput> | Job_seekerCreateWithoutUserInput[] | Job_seekerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_seekerCreateOrConnectWithoutUserInput | Job_seekerCreateOrConnectWithoutUserInput[]
    createMany?: Job_seekerCreateManyUserInputEnvelope
    connect?: Job_seekerWhereUniqueInput | Job_seekerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type Job_applicationCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutJob_seekerInput = {
    create?: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_seekerInput
    connect?: UserWhereUniqueInput
  }

  export type Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput> | Job_seeker_skillsCreateWithoutJob_seekerInput[] | Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput | Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_seeker_skillsCreateManyJob_seekerInputEnvelope
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
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

  export type Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput> | Job_applicationCreateWithoutJob_seekerInput[] | Job_applicationUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJob_seekerInput | Job_applicationCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_applicationCreateManyJob_seekerInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput> | Job_seeker_skillsCreateWithoutJob_seekerInput[] | Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput | Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput[]
    createMany?: Job_seeker_skillsCreateManyJob_seekerInputEnvelope
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type UserUpdateOneRequiredWithoutJob_seekerNestedInput = {
    create?: XOR<UserCreateWithoutJob_seekerInput, UserUncheckedCreateWithoutJob_seekerInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_seekerInput
    upsert?: UserUpsertWithoutJob_seekerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJob_seekerInput, UserUpdateWithoutJob_seekerInput>, UserUncheckedUpdateWithoutJob_seekerInput>
  }

  export type Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput> | Job_seeker_skillsCreateWithoutJob_seekerInput[] | Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput | Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput[]
    upsert?: Job_seeker_skillsUpsertWithWhereUniqueWithoutJob_seekerInput | Job_seeker_skillsUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: Job_seeker_skillsCreateManyJob_seekerInputEnvelope
    set?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    disconnect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    delete?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    update?: Job_seeker_skillsUpdateWithWhereUniqueWithoutJob_seekerInput | Job_seeker_skillsUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: Job_seeker_skillsUpdateManyWithWhereWithoutJob_seekerInput | Job_seeker_skillsUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
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

  export type Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput> | Job_seeker_skillsCreateWithoutJob_seekerInput[] | Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput | Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput[]
    upsert?: Job_seeker_skillsUpsertWithWhereUniqueWithoutJob_seekerInput | Job_seeker_skillsUpsertWithWhereUniqueWithoutJob_seekerInput[]
    createMany?: Job_seeker_skillsCreateManyJob_seekerInputEnvelope
    set?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    disconnect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    delete?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    update?: Job_seeker_skillsUpdateWithWhereUniqueWithoutJob_seekerInput | Job_seeker_skillsUpdateWithWhereUniqueWithoutJob_seekerInput[]
    updateMany?: Job_seeker_skillsUpdateManyWithWhereWithoutJob_seekerInput | Job_seeker_skillsUpdateManyWithWhereWithoutJob_seekerInput[]
    deleteMany?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type Job_applicationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput> | Job_applicationCreateWithoutCompanyInput[] | Job_applicationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutCompanyInput | Job_applicationCreateOrConnectWithoutCompanyInput[]
    createMany?: Job_applicationCreateManyCompanyInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type JobsCreateNestedManyWithoutCompanyInput = {
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

  export type JobsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput> | JobsCreateWithoutCompanyInput[] | JobsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutCompanyInput | JobsCreateOrConnectWithoutCompanyInput[]
    createMany?: JobsCreateManyCompanyInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
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

  export type Job_applicationCreateNestedManyWithoutJobInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutJobsInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type List_abilityCreateNestedManyWithoutJobInput = {
    create?: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput> | List_abilityCreateWithoutJobInput[] | List_abilityUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutJobInput | List_abilityCreateOrConnectWithoutJobInput[]
    createMany?: List_abilityCreateManyJobInputEnvelope
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
  }

  export type Required_skillsCreateNestedManyWithoutJobInput = {
    create?: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput> | Required_skillsCreateWithoutJobInput[] | Required_skillsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutJobInput | Required_skillsCreateOrConnectWithoutJobInput[]
    createMany?: Required_skillsCreateManyJobInputEnvelope
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
  }

  export type Job_applicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput> | Job_applicationCreateWithoutJobInput[] | Job_applicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Job_applicationCreateOrConnectWithoutJobInput | Job_applicationCreateOrConnectWithoutJobInput[]
    createMany?: Job_applicationCreateManyJobInputEnvelope
    connect?: Job_applicationWhereUniqueInput | Job_applicationWhereUniqueInput[]
  }

  export type List_abilityUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput> | List_abilityCreateWithoutJobInput[] | List_abilityUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutJobInput | List_abilityCreateOrConnectWithoutJobInput[]
    createMany?: List_abilityCreateManyJobInputEnvelope
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
  }

  export type Required_skillsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput> | Required_skillsCreateWithoutJobInput[] | Required_skillsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutJobInput | Required_skillsCreateOrConnectWithoutJobInput[]
    createMany?: Required_skillsCreateManyJobInputEnvelope
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type CompanyUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutJobsInput, CompanyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput
    upsert?: CompanyUpsertWithoutJobsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobsInput, CompanyUpdateWithoutJobsInput>, CompanyUncheckedUpdateWithoutJobsInput>
  }

  export type List_abilityUpdateManyWithoutJobNestedInput = {
    create?: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput> | List_abilityCreateWithoutJobInput[] | List_abilityUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutJobInput | List_abilityCreateOrConnectWithoutJobInput[]
    upsert?: List_abilityUpsertWithWhereUniqueWithoutJobInput | List_abilityUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: List_abilityCreateManyJobInputEnvelope
    set?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    disconnect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    delete?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    update?: List_abilityUpdateWithWhereUniqueWithoutJobInput | List_abilityUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: List_abilityUpdateManyWithWhereWithoutJobInput | List_abilityUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
  }

  export type Required_skillsUpdateManyWithoutJobNestedInput = {
    create?: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput> | Required_skillsCreateWithoutJobInput[] | Required_skillsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutJobInput | Required_skillsCreateOrConnectWithoutJobInput[]
    upsert?: Required_skillsUpsertWithWhereUniqueWithoutJobInput | Required_skillsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: Required_skillsCreateManyJobInputEnvelope
    set?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    disconnect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    delete?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    update?: Required_skillsUpdateWithWhereUniqueWithoutJobInput | Required_skillsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: Required_skillsUpdateManyWithWhereWithoutJobInput | Required_skillsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
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

  export type List_abilityUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput> | List_abilityCreateWithoutJobInput[] | List_abilityUncheckedCreateWithoutJobInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutJobInput | List_abilityCreateOrConnectWithoutJobInput[]
    upsert?: List_abilityUpsertWithWhereUniqueWithoutJobInput | List_abilityUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: List_abilityCreateManyJobInputEnvelope
    set?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    disconnect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    delete?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    update?: List_abilityUpdateWithWhereUniqueWithoutJobInput | List_abilityUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: List_abilityUpdateManyWithWhereWithoutJobInput | List_abilityUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
  }

  export type Required_skillsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput> | Required_skillsCreateWithoutJobInput[] | Required_skillsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutJobInput | Required_skillsCreateOrConnectWithoutJobInput[]
    upsert?: Required_skillsUpsertWithWhereUniqueWithoutJobInput | Required_skillsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: Required_skillsCreateManyJobInputEnvelope
    set?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    disconnect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    delete?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    update?: Required_skillsUpdateWithWhereUniqueWithoutJobInput | Required_skillsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: Required_skillsUpdateManyWithWhereWithoutJobInput | Required_skillsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
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

  export type Job_seeker_skillsCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput> | Job_seeker_skillsCreateWithoutSkillsInput[] | Job_seeker_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutSkillsInput | Job_seeker_skillsCreateOrConnectWithoutSkillsInput[]
    createMany?: Job_seeker_skillsCreateManySkillsInputEnvelope
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
  }

  export type Required_skillsCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput> | Required_skillsCreateWithoutSkillsInput[] | Required_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutSkillsInput | Required_skillsCreateOrConnectWithoutSkillsInput[]
    createMany?: Required_skillsCreateManySkillsInputEnvelope
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
  }

  export type Job_seeker_skillsUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput> | Job_seeker_skillsCreateWithoutSkillsInput[] | Job_seeker_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutSkillsInput | Job_seeker_skillsCreateOrConnectWithoutSkillsInput[]
    createMany?: Job_seeker_skillsCreateManySkillsInputEnvelope
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
  }

  export type Required_skillsUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput> | Required_skillsCreateWithoutSkillsInput[] | Required_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutSkillsInput | Required_skillsCreateOrConnectWithoutSkillsInput[]
    createMany?: Required_skillsCreateManySkillsInputEnvelope
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
  }

  export type Job_seeker_skillsUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput> | Job_seeker_skillsCreateWithoutSkillsInput[] | Job_seeker_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutSkillsInput | Job_seeker_skillsCreateOrConnectWithoutSkillsInput[]
    upsert?: Job_seeker_skillsUpsertWithWhereUniqueWithoutSkillsInput | Job_seeker_skillsUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: Job_seeker_skillsCreateManySkillsInputEnvelope
    set?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    disconnect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    delete?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    update?: Job_seeker_skillsUpdateWithWhereUniqueWithoutSkillsInput | Job_seeker_skillsUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: Job_seeker_skillsUpdateManyWithWhereWithoutSkillsInput | Job_seeker_skillsUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
  }

  export type Required_skillsUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput> | Required_skillsCreateWithoutSkillsInput[] | Required_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutSkillsInput | Required_skillsCreateOrConnectWithoutSkillsInput[]
    upsert?: Required_skillsUpsertWithWhereUniqueWithoutSkillsInput | Required_skillsUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: Required_skillsCreateManySkillsInputEnvelope
    set?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    disconnect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    delete?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    update?: Required_skillsUpdateWithWhereUniqueWithoutSkillsInput | Required_skillsUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: Required_skillsUpdateManyWithWhereWithoutSkillsInput | Required_skillsUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
  }

  export type Job_seeker_skillsUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput> | Job_seeker_skillsCreateWithoutSkillsInput[] | Job_seeker_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Job_seeker_skillsCreateOrConnectWithoutSkillsInput | Job_seeker_skillsCreateOrConnectWithoutSkillsInput[]
    upsert?: Job_seeker_skillsUpsertWithWhereUniqueWithoutSkillsInput | Job_seeker_skillsUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: Job_seeker_skillsCreateManySkillsInputEnvelope
    set?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    disconnect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    delete?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    connect?: Job_seeker_skillsWhereUniqueInput | Job_seeker_skillsWhereUniqueInput[]
    update?: Job_seeker_skillsUpdateWithWhereUniqueWithoutSkillsInput | Job_seeker_skillsUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: Job_seeker_skillsUpdateManyWithWhereWithoutSkillsInput | Job_seeker_skillsUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
  }

  export type Required_skillsUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput> | Required_skillsCreateWithoutSkillsInput[] | Required_skillsUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: Required_skillsCreateOrConnectWithoutSkillsInput | Required_skillsCreateOrConnectWithoutSkillsInput[]
    upsert?: Required_skillsUpsertWithWhereUniqueWithoutSkillsInput | Required_skillsUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: Required_skillsCreateManySkillsInputEnvelope
    set?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    disconnect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    delete?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    connect?: Required_skillsWhereUniqueInput | Required_skillsWhereUniqueInput[]
    update?: Required_skillsUpdateWithWhereUniqueWithoutSkillsInput | Required_skillsUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: Required_skillsUpdateManyWithWhereWithoutSkillsInput | Required_skillsUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
  }

  export type DisabilityCreateNestedOneWithoutList_disabilitiesInput = {
    create?: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutList_disabilitiesInput
    connect?: DisabilityWhereUniqueInput
  }

  export type Job_seekerCreateNestedOneWithoutDisabilitiesInput = {
    create?: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutDisabilitiesInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type DisabilityUpdateOneRequiredWithoutList_disabilitiesNestedInput = {
    create?: XOR<DisabilityCreateWithoutList_disabilitiesInput, DisabilityUncheckedCreateWithoutList_disabilitiesInput>
    connectOrCreate?: DisabilityCreateOrConnectWithoutList_disabilitiesInput
    upsert?: DisabilityUpsertWithoutList_disabilitiesInput
    connect?: DisabilityWhereUniqueInput
    update?: XOR<XOR<DisabilityUpdateToOneWithWhereWithoutList_disabilitiesInput, DisabilityUpdateWithoutList_disabilitiesInput>, DisabilityUncheckedUpdateWithoutList_disabilitiesInput>
  }

  export type Job_seekerUpdateOneRequiredWithoutDisabilitiesNestedInput = {
    create?: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutDisabilitiesInput
    upsert?: Job_seekerUpsertWithoutDisabilitiesInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutDisabilitiesInput, Job_seekerUpdateWithoutDisabilitiesInput>, Job_seekerUncheckedUpdateWithoutDisabilitiesInput>
  }

  export type CompanyCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJob_applicationInput
    connect?: CompanyWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobApplicationsInput
    connect?: JobsWhereUniqueInput
  }

  export type Job_seekerCreateNestedOneWithoutJob_applicationsInput = {
    create?: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_applicationsInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<CompanyCreateWithoutJob_applicationInput, CompanyUncheckedCreateWithoutJob_applicationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJob_applicationInput
    upsert?: CompanyUpsertWithoutJob_applicationInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJob_applicationInput, CompanyUpdateWithoutJob_applicationInput>, CompanyUncheckedUpdateWithoutJob_applicationInput>
  }

  export type JobsUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutJobApplicationsInput
    upsert?: JobsUpsertWithoutJobApplicationsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutJobApplicationsInput, JobsUpdateWithoutJobApplicationsInput>, JobsUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput = {
    create?: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_applicationsInput
    upsert?: Job_seekerUpsertWithoutJob_applicationsInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutJob_applicationsInput, Job_seekerUpdateWithoutJob_applicationsInput>, Job_seekerUncheckedUpdateWithoutJob_applicationsInput>
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

  export type List_abilityCreateNestedManyWithoutAbilityInput = {
    create?: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput> | List_abilityCreateWithoutAbilityInput[] | List_abilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutAbilityInput | List_abilityCreateOrConnectWithoutAbilityInput[]
    createMany?: List_abilityCreateManyAbilityInputEnvelope
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
  }

  export type List_abilityUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput> | List_abilityCreateWithoutAbilityInput[] | List_abilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutAbilityInput | List_abilityCreateOrConnectWithoutAbilityInput[]
    createMany?: List_abilityCreateManyAbilityInputEnvelope
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
  }

  export type List_abilityUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput> | List_abilityCreateWithoutAbilityInput[] | List_abilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutAbilityInput | List_abilityCreateOrConnectWithoutAbilityInput[]
    upsert?: List_abilityUpsertWithWhereUniqueWithoutAbilityInput | List_abilityUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: List_abilityCreateManyAbilityInputEnvelope
    set?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    disconnect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    delete?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    update?: List_abilityUpdateWithWhereUniqueWithoutAbilityInput | List_abilityUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: List_abilityUpdateManyWithWhereWithoutAbilityInput | List_abilityUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
  }

  export type List_abilityUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput> | List_abilityCreateWithoutAbilityInput[] | List_abilityUncheckedCreateWithoutAbilityInput[]
    connectOrCreate?: List_abilityCreateOrConnectWithoutAbilityInput | List_abilityCreateOrConnectWithoutAbilityInput[]
    upsert?: List_abilityUpsertWithWhereUniqueWithoutAbilityInput | List_abilityUpsertWithWhereUniqueWithoutAbilityInput[]
    createMany?: List_abilityCreateManyAbilityInputEnvelope
    set?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    disconnect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    delete?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    connect?: List_abilityWhereUniqueInput | List_abilityWhereUniqueInput[]
    update?: List_abilityUpdateWithWhereUniqueWithoutAbilityInput | List_abilityUpdateWithWhereUniqueWithoutAbilityInput[]
    updateMany?: List_abilityUpdateManyWithWhereWithoutAbilityInput | List_abilityUpdateManyWithWhereWithoutAbilityInput[]
    deleteMany?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
  }

  export type JobsCreateNestedOneWithoutList_abilityInput = {
    create?: XOR<JobsCreateWithoutList_abilityInput, JobsUncheckedCreateWithoutList_abilityInput>
    connectOrCreate?: JobsCreateOrConnectWithoutList_abilityInput
    connect?: JobsWhereUniqueInput
  }

  export type AbilityCreateNestedOneWithoutList_abiltyInput = {
    create?: XOR<AbilityCreateWithoutList_abiltyInput, AbilityUncheckedCreateWithoutList_abiltyInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutList_abiltyInput
    connect?: AbilityWhereUniqueInput
  }

  export type JobsUpdateOneWithoutList_abilityNestedInput = {
    create?: XOR<JobsCreateWithoutList_abilityInput, JobsUncheckedCreateWithoutList_abilityInput>
    connectOrCreate?: JobsCreateOrConnectWithoutList_abilityInput
    upsert?: JobsUpsertWithoutList_abilityInput
    disconnect?: JobsWhereInput | boolean
    delete?: JobsWhereInput | boolean
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutList_abilityInput, JobsUpdateWithoutList_abilityInput>, JobsUncheckedUpdateWithoutList_abilityInput>
  }

  export type AbilityUpdateOneWithoutList_abiltyNestedInput = {
    create?: XOR<AbilityCreateWithoutList_abiltyInput, AbilityUncheckedCreateWithoutList_abiltyInput>
    connectOrCreate?: AbilityCreateOrConnectWithoutList_abiltyInput
    upsert?: AbilityUpsertWithoutList_abiltyInput
    disconnect?: AbilityWhereInput | boolean
    delete?: AbilityWhereInput | boolean
    connect?: AbilityWhereUniqueInput
    update?: XOR<XOR<AbilityUpdateToOneWithWhereWithoutList_abiltyInput, AbilityUpdateWithoutList_abiltyInput>, AbilityUncheckedUpdateWithoutList_abiltyInput>
  }

  export type Job_seekerCreateNestedOneWithoutJob_seeker_skillsInput = {
    create?: XOR<Job_seekerCreateWithoutJob_seeker_skillsInput, Job_seekerUncheckedCreateWithoutJob_seeker_skillsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_seeker_skillsInput
    connect?: Job_seekerWhereUniqueInput
  }

  export type SkillsCreateNestedOneWithoutJob_seeker_skillsInput = {
    create?: XOR<SkillsCreateWithoutJob_seeker_skillsInput, SkillsUncheckedCreateWithoutJob_seeker_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutJob_seeker_skillsInput
    connect?: SkillsWhereUniqueInput
  }

  export type Job_seekerUpdateOneRequiredWithoutJob_seeker_skillsNestedInput = {
    create?: XOR<Job_seekerCreateWithoutJob_seeker_skillsInput, Job_seekerUncheckedCreateWithoutJob_seeker_skillsInput>
    connectOrCreate?: Job_seekerCreateOrConnectWithoutJob_seeker_skillsInput
    upsert?: Job_seekerUpsertWithoutJob_seeker_skillsInput
    connect?: Job_seekerWhereUniqueInput
    update?: XOR<XOR<Job_seekerUpdateToOneWithWhereWithoutJob_seeker_skillsInput, Job_seekerUpdateWithoutJob_seeker_skillsInput>, Job_seekerUncheckedUpdateWithoutJob_seeker_skillsInput>
  }

  export type SkillsUpdateOneRequiredWithoutJob_seeker_skillsNestedInput = {
    create?: XOR<SkillsCreateWithoutJob_seeker_skillsInput, SkillsUncheckedCreateWithoutJob_seeker_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutJob_seeker_skillsInput
    upsert?: SkillsUpsertWithoutJob_seeker_skillsInput
    connect?: SkillsWhereUniqueInput
    update?: XOR<XOR<SkillsUpdateToOneWithWhereWithoutJob_seeker_skillsInput, SkillsUpdateWithoutJob_seeker_skillsInput>, SkillsUncheckedUpdateWithoutJob_seeker_skillsInput>
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

  export type JobsCreateNestedOneWithoutRequired_skillsInput = {
    create?: XOR<JobsCreateWithoutRequired_skillsInput, JobsUncheckedCreateWithoutRequired_skillsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutRequired_skillsInput
    connect?: JobsWhereUniqueInput
  }

  export type SkillsCreateNestedOneWithoutRequired_skillsInput = {
    create?: XOR<SkillsCreateWithoutRequired_skillsInput, SkillsUncheckedCreateWithoutRequired_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutRequired_skillsInput
    connect?: SkillsWhereUniqueInput
  }

  export type JobsUpdateOneRequiredWithoutRequired_skillsNestedInput = {
    create?: XOR<JobsCreateWithoutRequired_skillsInput, JobsUncheckedCreateWithoutRequired_skillsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutRequired_skillsInput
    upsert?: JobsUpsertWithoutRequired_skillsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutRequired_skillsInput, JobsUpdateWithoutRequired_skillsInput>, JobsUncheckedUpdateWithoutRequired_skillsInput>
  }

  export type SkillsUpdateOneRequiredWithoutRequired_skillsNestedInput = {
    create?: XOR<SkillsCreateWithoutRequired_skillsInput, SkillsUncheckedCreateWithoutRequired_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutRequired_skillsInput
    upsert?: SkillsUpsertWithoutRequired_skillsInput
    connect?: SkillsWhereUniqueInput
    update?: XOR<XOR<SkillsUpdateToOneWithWhereWithoutRequired_skillsInput, SkillsUpdateWithoutRequired_skillsInput>, SkillsUncheckedUpdateWithoutRequired_skillsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    job_application?: Job_applicationCreateNestedManyWithoutCompanyInput
    jobs?: JobsCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
    job_application?: Job_applicationUncheckedCreateNestedManyWithoutCompanyInput
    jobs?: JobsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Job_seekerCreateWithoutUserInput = {
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutUserInput = {
    id?: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutUserInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutUserInput, Job_seekerUncheckedCreateWithoutUserInput>
  }

  export type Job_seekerCreateManyUserInputEnvelope = {
    data: Job_seekerCreateManyUserInput | Job_seekerCreateManyUserInput[]
    skipDuplicates?: boolean
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
    phone_number?: StringNullableFilter<"Job_seeker"> | string | null
    city?: StringNullableFilter<"Job_seeker"> | string | null
    dob?: DateTimeFilter<"Job_seeker"> | Date | string
    gender?: StringFilter<"Job_seeker"> | string
    description?: StringNullableFilter<"Job_seeker"> | string | null
  }

  export type Job_applicationCreateWithoutJob_seekerInput = {
    status: string
    cover_letter?: string | null
    company: CompanyCreateNestedOneWithoutJob_applicationInput
    job: JobsCreateNestedOneWithoutJobApplicationsInput
  }

  export type Job_applicationUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_applicationCreateOrConnectWithoutJob_seekerInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutJob_seekerInput, Job_applicationUncheckedCreateWithoutJob_seekerInput>
  }

  export type Job_applicationCreateManyJob_seekerInputEnvelope = {
    data: Job_applicationCreateManyJob_seekerInput | Job_applicationCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
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

  export type Job_seeker_skillsCreateWithoutJob_seekerInput = {
    skills: SkillsCreateNestedOneWithoutJob_seeker_skillsInput
  }

  export type Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput = {
    id?: number
    skill_id: number
  }

  export type Job_seeker_skillsCreateOrConnectWithoutJob_seekerInput = {
    where: Job_seeker_skillsWhereUniqueInput
    create: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput>
  }

  export type Job_seeker_skillsCreateManyJob_seekerInputEnvelope = {
    data: Job_seeker_skillsCreateManyJob_seekerInput | Job_seeker_skillsCreateManyJob_seekerInput[]
    skipDuplicates?: boolean
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
    cover_letter?: StringNullableFilter<"Job_application"> | string | null
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

  export type Job_seeker_skillsUpsertWithWhereUniqueWithoutJob_seekerInput = {
    where: Job_seeker_skillsWhereUniqueInput
    update: XOR<Job_seeker_skillsUpdateWithoutJob_seekerInput, Job_seeker_skillsUncheckedUpdateWithoutJob_seekerInput>
    create: XOR<Job_seeker_skillsCreateWithoutJob_seekerInput, Job_seeker_skillsUncheckedCreateWithoutJob_seekerInput>
  }

  export type Job_seeker_skillsUpdateWithWhereUniqueWithoutJob_seekerInput = {
    where: Job_seeker_skillsWhereUniqueInput
    data: XOR<Job_seeker_skillsUpdateWithoutJob_seekerInput, Job_seeker_skillsUncheckedUpdateWithoutJob_seekerInput>
  }

  export type Job_seeker_skillsUpdateManyWithWhereWithoutJob_seekerInput = {
    where: Job_seeker_skillsScalarWhereInput
    data: XOR<Job_seeker_skillsUpdateManyMutationInput, Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerInput>
  }

  export type Job_seeker_skillsScalarWhereInput = {
    AND?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
    OR?: Job_seeker_skillsScalarWhereInput[]
    NOT?: Job_seeker_skillsScalarWhereInput | Job_seeker_skillsScalarWhereInput[]
    id?: IntFilter<"Job_seeker_skills"> | number
    job_seeker_id?: IntFilter<"Job_seeker_skills"> | number
    skill_id?: IntFilter<"Job_seeker_skills"> | number
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

  export type Job_applicationCreateWithoutCompanyInput = {
    status: string
    cover_letter?: string | null
    job: JobsCreateNestedOneWithoutJobApplicationsInput
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
  }

  export type Job_applicationUncheckedCreateWithoutCompanyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_applicationCreateOrConnectWithoutCompanyInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutCompanyInput, Job_applicationUncheckedCreateWithoutCompanyInput>
  }

  export type Job_applicationCreateManyCompanyInputEnvelope = {
    data: Job_applicationCreateManyCompanyInput | Job_applicationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobsCreateWithoutCompanyInput = {
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
    list_ability?: List_abilityCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
    list_ability?: List_abilityUncheckedCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutCompanyInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutCompanyInput, JobsUncheckedCreateWithoutCompanyInput>
  }

  export type JobsCreateManyCompanyInputEnvelope = {
    data: JobsCreateManyCompanyInput | JobsCreateManyCompanyInput[]
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
    employment_type?: StringFilter<"Jobs"> | string
    min_salary?: IntNullableFilter<"Jobs"> | number | null
    gender?: StringNullableFilter<"Jobs"> | string | null
    max_salary?: IntNullableFilter<"Jobs"> | number | null
    date_posted?: DateTimeNullableFilter<"Jobs"> | Date | string | null
  }

  export type Job_applicationCreateWithoutJobInput = {
    status: string
    cover_letter?: string | null
    company: CompanyCreateNestedOneWithoutJob_applicationInput
    job_seeker: Job_seekerCreateNestedOneWithoutJob_applicationsInput
  }

  export type Job_applicationUncheckedCreateWithoutJobInput = {
    id?: number
    job_seeker_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_applicationCreateOrConnectWithoutJobInput = {
    where: Job_applicationWhereUniqueInput
    create: XOR<Job_applicationCreateWithoutJobInput, Job_applicationUncheckedCreateWithoutJobInput>
  }

  export type Job_applicationCreateManyJobInputEnvelope = {
    data: Job_applicationCreateManyJobInput | Job_applicationCreateManyJobInput[]
    skipDuplicates?: boolean
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

  export type List_abilityCreateWithoutJobInput = {
    ability?: AbilityCreateNestedOneWithoutList_abiltyInput
  }

  export type List_abilityUncheckedCreateWithoutJobInput = {
    id?: number
    ability_id?: number | null
  }

  export type List_abilityCreateOrConnectWithoutJobInput = {
    where: List_abilityWhereUniqueInput
    create: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput>
  }

  export type List_abilityCreateManyJobInputEnvelope = {
    data: List_abilityCreateManyJobInput | List_abilityCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type Required_skillsCreateWithoutJobInput = {
    skills: SkillsCreateNestedOneWithoutRequired_skillsInput
  }

  export type Required_skillsUncheckedCreateWithoutJobInput = {
    id?: number
    skill_id: number
  }

  export type Required_skillsCreateOrConnectWithoutJobInput = {
    where: Required_skillsWhereUniqueInput
    create: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput>
  }

  export type Required_skillsCreateManyJobInputEnvelope = {
    data: Required_skillsCreateManyJobInput | Required_skillsCreateManyJobInput[]
    skipDuplicates?: boolean
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

  export type List_abilityUpsertWithWhereUniqueWithoutJobInput = {
    where: List_abilityWhereUniqueInput
    update: XOR<List_abilityUpdateWithoutJobInput, List_abilityUncheckedUpdateWithoutJobInput>
    create: XOR<List_abilityCreateWithoutJobInput, List_abilityUncheckedCreateWithoutJobInput>
  }

  export type List_abilityUpdateWithWhereUniqueWithoutJobInput = {
    where: List_abilityWhereUniqueInput
    data: XOR<List_abilityUpdateWithoutJobInput, List_abilityUncheckedUpdateWithoutJobInput>
  }

  export type List_abilityUpdateManyWithWhereWithoutJobInput = {
    where: List_abilityScalarWhereInput
    data: XOR<List_abilityUpdateManyMutationInput, List_abilityUncheckedUpdateManyWithoutJobInput>
  }

  export type List_abilityScalarWhereInput = {
    AND?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
    OR?: List_abilityScalarWhereInput[]
    NOT?: List_abilityScalarWhereInput | List_abilityScalarWhereInput[]
    id?: IntFilter<"List_ability"> | number
    job_id?: IntNullableFilter<"List_ability"> | number | null
    ability_id?: IntNullableFilter<"List_ability"> | number | null
  }

  export type Required_skillsUpsertWithWhereUniqueWithoutJobInput = {
    where: Required_skillsWhereUniqueInput
    update: XOR<Required_skillsUpdateWithoutJobInput, Required_skillsUncheckedUpdateWithoutJobInput>
    create: XOR<Required_skillsCreateWithoutJobInput, Required_skillsUncheckedCreateWithoutJobInput>
  }

  export type Required_skillsUpdateWithWhereUniqueWithoutJobInput = {
    where: Required_skillsWhereUniqueInput
    data: XOR<Required_skillsUpdateWithoutJobInput, Required_skillsUncheckedUpdateWithoutJobInput>
  }

  export type Required_skillsUpdateManyWithWhereWithoutJobInput = {
    where: Required_skillsScalarWhereInput
    data: XOR<Required_skillsUpdateManyMutationInput, Required_skillsUncheckedUpdateManyWithoutJobInput>
  }

  export type Required_skillsScalarWhereInput = {
    AND?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
    OR?: Required_skillsScalarWhereInput[]
    NOT?: Required_skillsScalarWhereInput | Required_skillsScalarWhereInput[]
    id?: IntFilter<"Required_skills"> | number
    job_id?: IntFilter<"Required_skills"> | number
    skill_id?: IntFilter<"Required_skills"> | number
  }

  export type Job_seekerCreateWithoutCertificatesInput = {
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
    user: UserCreateNestedOneWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutCertificatesInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
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
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seeker_skillsCreateWithoutSkillsInput = {
    job_seeker: Job_seekerCreateNestedOneWithoutJob_seeker_skillsInput
  }

  export type Job_seeker_skillsUncheckedCreateWithoutSkillsInput = {
    id?: number
    job_seeker_id: number
  }

  export type Job_seeker_skillsCreateOrConnectWithoutSkillsInput = {
    where: Job_seeker_skillsWhereUniqueInput
    create: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput>
  }

  export type Job_seeker_skillsCreateManySkillsInputEnvelope = {
    data: Job_seeker_skillsCreateManySkillsInput | Job_seeker_skillsCreateManySkillsInput[]
    skipDuplicates?: boolean
  }

  export type Required_skillsCreateWithoutSkillsInput = {
    job: JobsCreateNestedOneWithoutRequired_skillsInput
  }

  export type Required_skillsUncheckedCreateWithoutSkillsInput = {
    id?: number
    job_id: number
  }

  export type Required_skillsCreateOrConnectWithoutSkillsInput = {
    where: Required_skillsWhereUniqueInput
    create: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput>
  }

  export type Required_skillsCreateManySkillsInputEnvelope = {
    data: Required_skillsCreateManySkillsInput | Required_skillsCreateManySkillsInput[]
    skipDuplicates?: boolean
  }

  export type Job_seeker_skillsUpsertWithWhereUniqueWithoutSkillsInput = {
    where: Job_seeker_skillsWhereUniqueInput
    update: XOR<Job_seeker_skillsUpdateWithoutSkillsInput, Job_seeker_skillsUncheckedUpdateWithoutSkillsInput>
    create: XOR<Job_seeker_skillsCreateWithoutSkillsInput, Job_seeker_skillsUncheckedCreateWithoutSkillsInput>
  }

  export type Job_seeker_skillsUpdateWithWhereUniqueWithoutSkillsInput = {
    where: Job_seeker_skillsWhereUniqueInput
    data: XOR<Job_seeker_skillsUpdateWithoutSkillsInput, Job_seeker_skillsUncheckedUpdateWithoutSkillsInput>
  }

  export type Job_seeker_skillsUpdateManyWithWhereWithoutSkillsInput = {
    where: Job_seeker_skillsScalarWhereInput
    data: XOR<Job_seeker_skillsUpdateManyMutationInput, Job_seeker_skillsUncheckedUpdateManyWithoutSkillsInput>
  }

  export type Required_skillsUpsertWithWhereUniqueWithoutSkillsInput = {
    where: Required_skillsWhereUniqueInput
    update: XOR<Required_skillsUpdateWithoutSkillsInput, Required_skillsUncheckedUpdateWithoutSkillsInput>
    create: XOR<Required_skillsCreateWithoutSkillsInput, Required_skillsUncheckedCreateWithoutSkillsInput>
  }

  export type Required_skillsUpdateWithWhereUniqueWithoutSkillsInput = {
    where: Required_skillsWhereUniqueInput
    data: XOR<Required_skillsUpdateWithoutSkillsInput, Required_skillsUncheckedUpdateWithoutSkillsInput>
  }

  export type Required_skillsUpdateManyWithWhereWithoutSkillsInput = {
    where: Required_skillsScalarWhereInput
    data: XOR<Required_skillsUpdateManyMutationInput, Required_skillsUncheckedUpdateManyWithoutSkillsInput>
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

  export type Job_seekerCreateWithoutDisabilitiesInput = {
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
    user: UserCreateNestedOneWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutDisabilitiesInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutDisabilitiesInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutDisabilitiesInput, Job_seekerUncheckedCreateWithoutDisabilitiesInput>
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
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutDisabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
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

  export type JobsCreateWithoutJobApplicationsInput = {
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    company: CompanyCreateNestedOneWithoutJobsInput
    list_ability?: List_abilityCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutJobApplicationsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    list_ability?: List_abilityUncheckedCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutJobApplicationsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutJobApplicationsInput, JobsUncheckedCreateWithoutJobApplicationsInput>
  }

  export type Job_seekerCreateWithoutJob_applicationsInput = {
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    user: UserCreateNestedOneWithoutJob_seekerInput
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutJob_applicationsInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutJob_applicationsInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutJob_applicationsInput, Job_seekerUncheckedCreateWithoutJob_applicationsInput>
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
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    list_ability?: List_abilityUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutJobApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    list_ability?: List_abilityUncheckedUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUncheckedUpdateManyWithoutJobNestedInput
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
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutJob_applicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
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

  export type List_abilityCreateWithoutAbilityInput = {
    job?: JobsCreateNestedOneWithoutList_abilityInput
  }

  export type List_abilityUncheckedCreateWithoutAbilityInput = {
    id?: number
    job_id?: number | null
  }

  export type List_abilityCreateOrConnectWithoutAbilityInput = {
    where: List_abilityWhereUniqueInput
    create: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput>
  }

  export type List_abilityCreateManyAbilityInputEnvelope = {
    data: List_abilityCreateManyAbilityInput | List_abilityCreateManyAbilityInput[]
    skipDuplicates?: boolean
  }

  export type List_abilityUpsertWithWhereUniqueWithoutAbilityInput = {
    where: List_abilityWhereUniqueInput
    update: XOR<List_abilityUpdateWithoutAbilityInput, List_abilityUncheckedUpdateWithoutAbilityInput>
    create: XOR<List_abilityCreateWithoutAbilityInput, List_abilityUncheckedCreateWithoutAbilityInput>
  }

  export type List_abilityUpdateWithWhereUniqueWithoutAbilityInput = {
    where: List_abilityWhereUniqueInput
    data: XOR<List_abilityUpdateWithoutAbilityInput, List_abilityUncheckedUpdateWithoutAbilityInput>
  }

  export type List_abilityUpdateManyWithWhereWithoutAbilityInput = {
    where: List_abilityScalarWhereInput
    data: XOR<List_abilityUpdateManyMutationInput, List_abilityUncheckedUpdateManyWithoutAbilityInput>
  }

  export type JobsCreateWithoutList_abilityInput = {
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
    company: CompanyCreateNestedOneWithoutJobsInput
    required_skills?: Required_skillsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutList_abilityInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutList_abilityInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutList_abilityInput, JobsUncheckedCreateWithoutList_abilityInput>
  }

  export type AbilityCreateWithoutList_abiltyInput = {
    name: string
  }

  export type AbilityUncheckedCreateWithoutList_abiltyInput = {
    id?: number
    name: string
  }

  export type AbilityCreateOrConnectWithoutList_abiltyInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutList_abiltyInput, AbilityUncheckedCreateWithoutList_abiltyInput>
  }

  export type JobsUpsertWithoutList_abilityInput = {
    update: XOR<JobsUpdateWithoutList_abilityInput, JobsUncheckedUpdateWithoutList_abilityInput>
    create: XOR<JobsCreateWithoutList_abilityInput, JobsUncheckedCreateWithoutList_abilityInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutList_abilityInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutList_abilityInput, JobsUncheckedUpdateWithoutList_abilityInput>
  }

  export type JobsUpdateWithoutList_abilityInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    required_skills?: Required_skillsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutList_abilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type AbilityUpsertWithoutList_abiltyInput = {
    update: XOR<AbilityUpdateWithoutList_abiltyInput, AbilityUncheckedUpdateWithoutList_abiltyInput>
    create: XOR<AbilityCreateWithoutList_abiltyInput, AbilityUncheckedCreateWithoutList_abiltyInput>
    where?: AbilityWhereInput
  }

  export type AbilityUpdateToOneWithWhereWithoutList_abiltyInput = {
    where?: AbilityWhereInput
    data: XOR<AbilityUpdateWithoutList_abiltyInput, AbilityUncheckedUpdateWithoutList_abiltyInput>
  }

  export type AbilityUpdateWithoutList_abiltyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AbilityUncheckedUpdateWithoutList_abiltyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Job_seekerCreateWithoutJob_seeker_skillsInput = {
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationCreateNestedManyWithoutJob_seekerInput
    user: UserCreateNestedOneWithoutJob_seekerInput
    certificates?: List_certificateCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerUncheckedCreateWithoutJob_seeker_skillsInput = {
    id?: number
    user_id: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
    job_applications?: Job_applicationUncheckedCreateNestedManyWithoutJob_seekerInput
    certificates?: List_certificateUncheckedCreateNestedManyWithoutJob_seekerInput
    disabilities?: List_disabilityUncheckedCreateNestedManyWithoutJob_seekerInput
  }

  export type Job_seekerCreateOrConnectWithoutJob_seeker_skillsInput = {
    where: Job_seekerWhereUniqueInput
    create: XOR<Job_seekerCreateWithoutJob_seeker_skillsInput, Job_seekerUncheckedCreateWithoutJob_seeker_skillsInput>
  }

  export type SkillsCreateWithoutJob_seeker_skillsInput = {
    name: string
    required_skills?: Required_skillsCreateNestedManyWithoutSkillsInput
  }

  export type SkillsUncheckedCreateWithoutJob_seeker_skillsInput = {
    id?: number
    name: string
    required_skills?: Required_skillsUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillsCreateOrConnectWithoutJob_seeker_skillsInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutJob_seeker_skillsInput, SkillsUncheckedCreateWithoutJob_seeker_skillsInput>
  }

  export type Job_seekerUpsertWithoutJob_seeker_skillsInput = {
    update: XOR<Job_seekerUpdateWithoutJob_seeker_skillsInput, Job_seekerUncheckedUpdateWithoutJob_seeker_skillsInput>
    create: XOR<Job_seekerCreateWithoutJob_seeker_skillsInput, Job_seekerUncheckedCreateWithoutJob_seeker_skillsInput>
    where?: Job_seekerWhereInput
  }

  export type Job_seekerUpdateToOneWithWhereWithoutJob_seeker_skillsInput = {
    where?: Job_seekerWhereInput
    data: XOR<Job_seekerUpdateWithoutJob_seeker_skillsInput, Job_seekerUncheckedUpdateWithoutJob_seeker_skillsInput>
  }

  export type Job_seekerUpdateWithoutJob_seeker_skillsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
    user?: UserUpdateOneRequiredWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutJob_seeker_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type SkillsUpsertWithoutJob_seeker_skillsInput = {
    update: XOR<SkillsUpdateWithoutJob_seeker_skillsInput, SkillsUncheckedUpdateWithoutJob_seeker_skillsInput>
    create: XOR<SkillsCreateWithoutJob_seeker_skillsInput, SkillsUncheckedCreateWithoutJob_seeker_skillsInput>
    where?: SkillsWhereInput
  }

  export type SkillsUpdateToOneWithWhereWithoutJob_seeker_skillsInput = {
    where?: SkillsWhereInput
    data: XOR<SkillsUpdateWithoutJob_seeker_skillsInput, SkillsUncheckedUpdateWithoutJob_seeker_skillsInput>
  }

  export type SkillsUpdateWithoutJob_seeker_skillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    required_skills?: Required_skillsUpdateManyWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateWithoutJob_seeker_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    required_skills?: Required_skillsUncheckedUpdateManyWithoutSkillsNestedInput
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

  export type JobsCreateWithoutRequired_skillsInput = {
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationCreateNestedManyWithoutJobInput
    company: CompanyCreateNestedOneWithoutJobsInput
    list_ability?: List_abilityCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutRequired_skillsInput = {
    id?: number
    company_id: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
    jobApplications?: Job_applicationUncheckedCreateNestedManyWithoutJobInput
    list_ability?: List_abilityUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutRequired_skillsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutRequired_skillsInput, JobsUncheckedCreateWithoutRequired_skillsInput>
  }

  export type SkillsCreateWithoutRequired_skillsInput = {
    name: string
    job_seeker_skills?: Job_seeker_skillsCreateNestedManyWithoutSkillsInput
  }

  export type SkillsUncheckedCreateWithoutRequired_skillsInput = {
    id?: number
    name: string
    job_seeker_skills?: Job_seeker_skillsUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillsCreateOrConnectWithoutRequired_skillsInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutRequired_skillsInput, SkillsUncheckedCreateWithoutRequired_skillsInput>
  }

  export type JobsUpsertWithoutRequired_skillsInput = {
    update: XOR<JobsUpdateWithoutRequired_skillsInput, JobsUncheckedUpdateWithoutRequired_skillsInput>
    create: XOR<JobsCreateWithoutRequired_skillsInput, JobsUncheckedCreateWithoutRequired_skillsInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutRequired_skillsInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutRequired_skillsInput, JobsUncheckedUpdateWithoutRequired_skillsInput>
  }

  export type JobsUpdateWithoutRequired_skillsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
    company?: CompanyUpdateOneRequiredWithoutJobsNestedInput
    list_ability?: List_abilityUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutRequired_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
    list_ability?: List_abilityUncheckedUpdateManyWithoutJobNestedInput
  }

  export type SkillsUpsertWithoutRequired_skillsInput = {
    update: XOR<SkillsUpdateWithoutRequired_skillsInput, SkillsUncheckedUpdateWithoutRequired_skillsInput>
    create: XOR<SkillsCreateWithoutRequired_skillsInput, SkillsUncheckedCreateWithoutRequired_skillsInput>
    where?: SkillsWhereInput
  }

  export type SkillsUpdateToOneWithWhereWithoutRequired_skillsInput = {
    where?: SkillsWhereInput
    data: XOR<SkillsUpdateWithoutRequired_skillsInput, SkillsUncheckedUpdateWithoutRequired_skillsInput>
  }

  export type SkillsUpdateWithoutRequired_skillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateWithoutRequired_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type CompanyCreateManyUserInput = {
    id?: number
    name: string
    city: string
    about: string
    logo?: string | null
    picture?: string | null
  }

  export type Job_seekerCreateManyUserInput = {
    id?: number
    fullname: string
    phone_number?: string | null
    city?: string | null
    dob: Date | string
    gender: string
    description?: string | null
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    job_application?: Job_applicationUpdateManyWithoutCompanyNestedInput
    jobs?: JobsUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    job_application?: Job_applicationUncheckedUpdateManyWithoutCompanyNestedInput
    jobs?: JobsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_seekerUpdateWithoutUserInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUpdateManyWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_applications?: Job_applicationUncheckedUpdateManyWithoutJob_seekerNestedInput
    job_seeker_skills?: Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerNestedInput
    certificates?: List_certificateUncheckedUpdateManyWithoutJob_seekerNestedInput
    disabilities?: List_disabilityUncheckedUpdateManyWithoutJob_seekerNestedInput
  }

  export type Job_seekerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationCreateManyJob_seekerInput = {
    id?: number
    job_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type Job_seeker_skillsCreateManyJob_seekerInput = {
    id?: number
    skill_id: number
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

  export type Job_applicationUpdateWithoutJob_seekerInput = {
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_seeker_skillsUpdateWithoutJob_seekerInput = {
    skills?: SkillsUpdateOneRequiredWithoutJob_seeker_skillsNestedInput
  }

  export type Job_seeker_skillsUncheckedUpdateWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_seeker_skillsUncheckedUpdateManyWithoutJob_seekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
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

  export type Job_applicationCreateManyCompanyInput = {
    id?: number
    job_seeker_id: number
    job_id: number
    status: string
    cover_letter?: string | null
  }

  export type JobsCreateManyCompanyInput = {
    id?: number
    title: string
    description: string
    employment_type: string
    min_salary?: number | null
    gender?: string | null
    max_salary?: number | null
    date_posted?: Date | string | null
  }

  export type Job_applicationUpdateWithoutCompanyInput = {
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
    job?: JobsUpdateOneRequiredWithoutJobApplicationsNestedInput
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobsUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUpdateManyWithoutJobNestedInput
    list_ability?: List_abilityUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobApplications?: Job_applicationUncheckedUpdateManyWithoutJobNestedInput
    list_ability?: List_abilityUncheckedUpdateManyWithoutJobNestedInput
    required_skills?: Required_skillsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    min_salary?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    max_salary?: NullableIntFieldUpdateOperationsInput | number | null
    date_posted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Job_applicationCreateManyJobInput = {
    id?: number
    job_seeker_id: number
    company_id: number
    status: string
    cover_letter?: string | null
  }

  export type List_abilityCreateManyJobInput = {
    id?: number
    ability_id?: number | null
  }

  export type Required_skillsCreateManyJobInput = {
    id?: number
    skill_id: number
  }

  export type Job_applicationUpdateWithoutJobInput = {
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutJob_applicationNestedInput
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_applicationsNestedInput
  }

  export type Job_applicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Job_applicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type List_abilityUpdateWithoutJobInput = {
    ability?: AbilityUpdateOneWithoutList_abiltyNestedInput
  }

  export type List_abilityUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type List_abilityUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    ability_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Required_skillsUpdateWithoutJobInput = {
    skills?: SkillsUpdateOneRequiredWithoutRequired_skillsNestedInput
  }

  export type Required_skillsUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Required_skillsUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_seeker_skillsCreateManySkillsInput = {
    id?: number
    job_seeker_id: number
  }

  export type Required_skillsCreateManySkillsInput = {
    id?: number
    job_id: number
  }

  export type Job_seeker_skillsUpdateWithoutSkillsInput = {
    job_seeker?: Job_seekerUpdateOneRequiredWithoutJob_seeker_skillsNestedInput
  }

  export type Job_seeker_skillsUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type Job_seeker_skillsUncheckedUpdateManyWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_seeker_id?: IntFieldUpdateOperationsInput | number
  }

  export type Required_skillsUpdateWithoutSkillsInput = {
    job?: JobsUpdateOneRequiredWithoutRequired_skillsNestedInput
  }

  export type Required_skillsUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type Required_skillsUncheckedUpdateManyWithoutSkillsInput = {
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

  export type List_abilityCreateManyAbilityInput = {
    id?: number
    job_id?: number | null
  }

  export type List_abilityUpdateWithoutAbilityInput = {
    job?: JobsUpdateOneWithoutList_abilityNestedInput
  }

  export type List_abilityUncheckedUpdateWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type List_abilityUncheckedUpdateManyWithoutAbilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
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
     * @deprecated Use SkillsCountOutputTypeDefaultArgs instead
     */
    export type SkillsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use SkillsDefaultArgs instead
     */
    export type SkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsDefaultArgs<ExtArgs>
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
     * @deprecated Use List_abilityDefaultArgs instead
     */
    export type List_abilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = List_abilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Job_seeker_skillsDefaultArgs instead
     */
    export type Job_seeker_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Job_seeker_skillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Required_skillsDefaultArgs instead
     */
    export type Required_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Required_skillsDefaultArgs<ExtArgs>

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