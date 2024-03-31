
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  is_verified: 'is_verified'
};

exports.Prisma.Job_seekerScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  fullname: 'fullname',
  phone_number: 'phone_number',
  city: 'city',
  dob: 'dob',
  gender: 'gender'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  city: 'city',
  about: 'about',
  logo: 'logo',
  picture: 'picture'
};

exports.Prisma.JobsScalarFieldEnum = {
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

exports.Prisma.List_certificateScalarFieldEnum = {
  id: 'id',
  job_seeker_id: 'job_seeker_id',
  name: 'name',
  description: 'description'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.List_disabilityScalarFieldEnum = {
  id: 'id',
  job_seeker_id: 'job_seeker_id',
  disability_id: 'disability_id'
};

exports.Prisma.Job_applicationScalarFieldEnum = {
  id: 'id',
  job_seeker_id: 'job_seeker_id',
  job_id: 'job_id',
  company_id: 'company_id',
  status: 'status',
  cover_letter: 'cover_letter'
};

exports.Prisma.DisabilityScalarFieldEnum = {
  id: 'id',
  category_id: 'category_id',
  name: 'name'
};

exports.Prisma.AbilityScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.List_abilityScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  ability_id: 'ability_id'
};

exports.Prisma.Job_seeker_skillsScalarFieldEnum = {
  id: 'id',
  job_seeker_id: 'job_seeker_id',
  skill_id: 'skill_id'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Required_skillsScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  skill_id: 'skill_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
