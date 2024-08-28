/* eslint-disable */

export type PostStatusType =
  | 'draft'
  | 'published'

export type PostWhereUniqueInput = {
  readonly id?: string | null
}

export type PostWhereInput = {
  readonly AND?: ReadonlyArray<PostWhereInput> | PostWhereInput | null
  readonly OR?: ReadonlyArray<PostWhereInput> | PostWhereInput | null
  readonly NOT?: ReadonlyArray<PostWhereInput> | PostWhereInput | null
  readonly id?: IDFilter | null
  readonly title?: StringFilter | null
  readonly status?: PostStatusTypeNullableFilter | null
  readonly content?: StringFilter | null
  readonly publishDate?: DateTimeNullableFilter | null
  readonly author?: AuthorWhereInput | null
}

export type IDFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly not?: IDFilter | null
}

export type StringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type NestedStringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type PostStatusTypeNullableFilter = {
  readonly equals?: PostStatusType | null
  readonly in?: ReadonlyArray<PostStatusType> | PostStatusType | null
  readonly notIn?: ReadonlyArray<PostStatusType> | PostStatusType | null
  readonly not?: PostStatusTypeNullableFilter | null
}

export type DateTimeNullableFilter = {
  readonly equals?: any | null
  readonly in?: ReadonlyArray<any> | any | null
  readonly notIn?: ReadonlyArray<any> | any | null
  readonly lt?: any | null
  readonly lte?: any | null
  readonly gt?: any | null
  readonly gte?: any | null
  readonly not?: DateTimeNullableFilter | null
}

export type PostOrderByInput = {
  readonly id?: OrderDirection | null
  readonly title?: OrderDirection | null
  readonly status?: OrderDirection | null
  readonly content?: OrderDirection | null
  readonly publishDate?: OrderDirection | null
}

export type OrderDirection =
  | 'asc'
  | 'desc'

export type PostUpdateInput = {
  readonly title?: string | null
  readonly status?: PostStatusType | null
  readonly content?: string | null
  readonly publishDate?: any | null
  readonly author?: AuthorRelateToOneForUpdateInput | null
}

export type AuthorRelateToOneForUpdateInput = {
  readonly create?: AuthorCreateInput | null
  readonly connect?: AuthorWhereUniqueInput | null
  readonly disconnect?: boolean | null
}

export type PostUpdateArgs = {
  readonly where: PostWhereUniqueInput
  readonly data: PostUpdateInput
}

export type PostCreateInput = {
  readonly title?: string | null
  readonly status?: PostStatusType | null
  readonly content?: string | null
  readonly publishDate?: any | null
  readonly author?: AuthorRelateToOneForCreateInput | null
}

export type AuthorRelateToOneForCreateInput = {
  readonly create?: AuthorCreateInput | null
  readonly connect?: AuthorWhereUniqueInput | null
}

export type AuthorWhereUniqueInput = {
  readonly id?: string | null
}

export type AuthorWhereInput = {
  readonly AND?: ReadonlyArray<AuthorWhereInput> | AuthorWhereInput | null
  readonly OR?: ReadonlyArray<AuthorWhereInput> | AuthorWhereInput | null
  readonly NOT?: ReadonlyArray<AuthorWhereInput> | AuthorWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly posts?: PostManyRelationFilter | null
}

export type PostManyRelationFilter = {
  readonly every?: PostWhereInput | null
  readonly some?: PostWhereInput | null
  readonly none?: PostWhereInput | null
}

export type AuthorOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
}

export type AuthorUpdateInput = {
  readonly name?: string | null
  readonly posts?: PostRelateToManyForUpdateInput | null
}

export type PostRelateToManyForUpdateInput = {
  readonly disconnect?: ReadonlyArray<PostWhereUniqueInput> | PostWhereUniqueInput | null
  readonly set?: ReadonlyArray<PostWhereUniqueInput> | PostWhereUniqueInput | null
  readonly create?: ReadonlyArray<PostCreateInput> | PostCreateInput | null
  readonly connect?: ReadonlyArray<PostWhereUniqueInput> | PostWhereUniqueInput | null
}

export type AuthorUpdateArgs = {
  readonly where: AuthorWhereUniqueInput
  readonly data: AuthorUpdateInput
}

export type AuthorCreateInput = {
  readonly name?: string | null
  readonly posts?: PostRelateToManyForCreateInput | null
}

export type PostRelateToManyForCreateInput = {
  readonly create?: ReadonlyArray<PostCreateInput> | PostCreateInput | null
  readonly connect?: ReadonlyArray<PostWhereUniqueInput> | PostWhereUniqueInput | null
}

export type KeystoneAdminUIFieldMetaIsNonNull =
  | 'read'
  | 'create'
  | 'update'

export type KeystoneAdminUIFieldMetaCreateViewFieldMode =
  | 'edit'
  | 'hidden'

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden'

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden'

export type KeystoneAdminUIFieldMetaItemViewFieldPosition =
  | 'form'
  | 'sidebar'

export type QueryMode =
  | 'default'
  | 'insensitive'

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC'

type ResolvedPostCreateInput = {
  id?: import('./node_modules/myprisma').Prisma.PostCreateInput['id']
  title?: import('./node_modules/myprisma').Prisma.PostCreateInput['title']
  status?: import('./node_modules/myprisma').Prisma.PostCreateInput['status']
  content?: import('./node_modules/myprisma').Prisma.PostCreateInput['content']
  publishDate?: import('./node_modules/myprisma').Prisma.PostCreateInput['publishDate']
  author?: import('./node_modules/myprisma').Prisma.PostCreateInput['author']
}
type ResolvedPostUpdateInput = {
  id?: undefined
  title?: import('./node_modules/myprisma').Prisma.PostUpdateInput['title']
  status?: import('./node_modules/myprisma').Prisma.PostUpdateInput['status']
  content?: import('./node_modules/myprisma').Prisma.PostUpdateInput['content']
  publishDate?: import('./node_modules/myprisma').Prisma.PostUpdateInput['publishDate']
  author?: import('./node_modules/myprisma').Prisma.PostUpdateInput['author']
}
type ResolvedAuthorCreateInput = {
  id?: import('./node_modules/myprisma').Prisma.AuthorCreateInput['id']
  name?: import('./node_modules/myprisma').Prisma.AuthorCreateInput['name']
  posts?: import('./node_modules/myprisma').Prisma.AuthorCreateInput['posts']
}
type ResolvedAuthorUpdateInput = {
  id?: undefined
  name?: import('./node_modules/myprisma').Prisma.AuthorUpdateInput['name']
  posts?: import('./node_modules/myprisma').Prisma.AuthorUpdateInput['posts']
}

export declare namespace Lists {
  export type Post<Session = any> = import('@keystone-6/core').ListConfig<Lists.Post.TypeInfo<Session>>
  namespace Post {
    export type Item = import('./node_modules/myprisma').Post
    export type TypeInfo<Session = any> = {
      key: 'Post'
      isSingleton: false
      fields: 'id' | 'title' | 'status' | 'content' | 'publishDate' | 'author'
      item: Item
      inputs: {
        where: PostWhereInput
        uniqueWhere: PostWhereUniqueInput
        create: PostCreateInput
        update: PostUpdateInput
        orderBy: PostOrderByInput
      }
      prisma: {
        create: ResolvedPostCreateInput
        update: ResolvedPostUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Author<Session = any> = import('@keystone-6/core').ListConfig<Lists.Author.TypeInfo<Session>>
  namespace Author {
    export type Item = import('./node_modules/myprisma').Author
    export type TypeInfo<Session = any> = {
      key: 'Author'
      isSingleton: false
      fields: 'id' | 'name' | 'posts'
      item: Item
      inputs: {
        where: AuthorWhereInput
        uniqueWhere: AuthorWhereUniqueInput
        create: AuthorCreateInput
        update: AuthorUpdateInput
        orderBy: AuthorOrderByInput
      }
      prisma: {
        create: ResolvedAuthorCreateInput
        update: ResolvedAuthorUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
}

type Scalars = {
  ID: string
  Boolean: boolean
  String: string
  Int: number
  Float: number
  JSON: import('@keystone-6/core/types').JSONValue
  Decimal: import('@keystone-6/core/types').Decimal | string
}

type IntrospectionResult = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'Post': { kind: 'OBJECT'; name: 'Post'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'status': { name: 'status'; type: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; } }; 'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'publishDate': { name: 'publishDate'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'author': { name: 'author'; type: { kind: 'OBJECT'; name: 'Author'; ofType: null; } }; }; };
    'ID': unknown;
    'String': unknown;
    'PostStatusType': { name: 'PostStatusType'; enumValues: 'draft' | 'published'; };
    'DateTime': unknown;
    'PostWhereUniqueInput': { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }]; };
    'PostWhereInput': { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; isOneOf: false; inputFields: [{ name: 'AND'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'OR'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'NOT'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IDFilter'; ofType: null; }; defaultValue: null }, { name: 'title'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, { name: 'status'; type: { kind: 'INPUT_OBJECT'; name: 'PostStatusTypeNullableFilter'; ofType: null; }; defaultValue: null }, { name: 'content'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, { name: 'publishDate'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeNullableFilter'; ofType: null; }; defaultValue: null }, { name: 'author'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereInput'; ofType: null; }; defaultValue: null }]; };
    'IDFilter': { kind: 'INPUT_OBJECT'; name: 'IDFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; }; defaultValue: null }, { name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; }; defaultValue: null }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'lte'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'not'; type: { kind: 'INPUT_OBJECT'; name: 'IDFilter'; ofType: null; }; defaultValue: null }]; };
    'StringFilter': { kind: 'INPUT_OBJECT'; name: 'StringFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'lte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'contains'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'startsWith'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'endsWith'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'not'; type: { kind: 'INPUT_OBJECT'; name: 'NestedStringFilter'; ofType: null; }; defaultValue: null }]; };
    'NestedStringFilter': { kind: 'INPUT_OBJECT'; name: 'NestedStringFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'lte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'contains'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'startsWith'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'endsWith'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'not'; type: { kind: 'INPUT_OBJECT'; name: 'NestedStringFilter'; ofType: null; }; defaultValue: null }]; };
    'PostStatusTypeNullableFilter': { kind: 'INPUT_OBJECT'; name: 'PostStatusTypeNullableFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; }; }; }; defaultValue: null }, { name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; }; }; }; defaultValue: null }, { name: 'not'; type: { kind: 'INPUT_OBJECT'; name: 'PostStatusTypeNullableFilter'; ofType: null; }; defaultValue: null }]; };
    'DateTimeNullableFilter': { kind: 'INPUT_OBJECT'; name: 'DateTimeNullableFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }; }; defaultValue: null }, { name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }; }; defaultValue: null }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'lte'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'not'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeNullableFilter'; ofType: null; }; defaultValue: null }]; };
    'PostOrderByInput': { kind: 'INPUT_OBJECT'; name: 'PostOrderByInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }, { name: 'title'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }, { name: 'status'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }, { name: 'content'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }, { name: 'publishDate'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }]; };
    'OrderDirection': { name: 'OrderDirection'; enumValues: 'asc' | 'desc'; };
    'PostUpdateInput': { kind: 'INPUT_OBJECT'; name: 'PostUpdateInput'; isOneOf: false; inputFields: [{ name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'status'; type: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; }; defaultValue: null }, { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'publishDate'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'author'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorRelateToOneForUpdateInput'; ofType: null; }; defaultValue: null }]; };
    'AuthorRelateToOneForUpdateInput': { kind: 'INPUT_OBJECT'; name: 'AuthorRelateToOneForUpdateInput'; isOneOf: false; inputFields: [{ name: 'create'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorCreateInput'; ofType: null; }; defaultValue: null }, { name: 'connect'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereUniqueInput'; ofType: null; }; defaultValue: null }, { name: 'disconnect'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }]; };
    'Boolean': unknown;
    'PostUpdateArgs': { kind: 'INPUT_OBJECT'; name: 'PostUpdateArgs'; isOneOf: false; inputFields: [{ name: 'where'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; ofType: null; }; }; defaultValue: null }, { name: 'data'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostUpdateInput'; ofType: null; }; }; defaultValue: null }]; };
    'PostCreateInput': { kind: 'INPUT_OBJECT'; name: 'PostCreateInput'; isOneOf: false; inputFields: [{ name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'status'; type: { kind: 'ENUM'; name: 'PostStatusType'; ofType: null; }; defaultValue: null }, { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'publishDate'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'author'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorRelateToOneForCreateInput'; ofType: null; }; defaultValue: null }]; };
    'AuthorRelateToOneForCreateInput': { kind: 'INPUT_OBJECT'; name: 'AuthorRelateToOneForCreateInput'; isOneOf: false; inputFields: [{ name: 'create'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorCreateInput'; ofType: null; }; defaultValue: null }, { name: 'connect'; type: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereUniqueInput'; ofType: null; }; defaultValue: null }]; };
    'Author': { kind: 'OBJECT'; name: 'Author'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'posts': { name: 'posts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; }; } }; 'postsCount': { name: 'postsCount'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; }; };
    'Int': unknown;
    'AuthorWhereUniqueInput': { kind: 'INPUT_OBJECT'; name: 'AuthorWhereUniqueInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }]; };
    'AuthorWhereInput': { kind: 'INPUT_OBJECT'; name: 'AuthorWhereInput'; isOneOf: false; inputFields: [{ name: 'AND'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'OR'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'NOT'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IDFilter'; ofType: null; }; defaultValue: null }, { name: 'name'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, { name: 'posts'; type: { kind: 'INPUT_OBJECT'; name: 'PostManyRelationFilter'; ofType: null; }; defaultValue: null }]; };
    'PostManyRelationFilter': { kind: 'INPUT_OBJECT'; name: 'PostManyRelationFilter'; isOneOf: false; inputFields: [{ name: 'every'; type: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; defaultValue: null }, { name: 'some'; type: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; defaultValue: null }, { name: 'none'; type: { kind: 'INPUT_OBJECT'; name: 'PostWhereInput'; ofType: null; }; defaultValue: null }]; };
    'AuthorOrderByInput': { kind: 'INPUT_OBJECT'; name: 'AuthorOrderByInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }, { name: 'name'; type: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; defaultValue: null }]; };
    'AuthorUpdateInput': { kind: 'INPUT_OBJECT'; name: 'AuthorUpdateInput'; isOneOf: false; inputFields: [{ name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'posts'; type: { kind: 'INPUT_OBJECT'; name: 'PostRelateToManyForUpdateInput'; ofType: null; }; defaultValue: null }]; };
    'PostRelateToManyForUpdateInput': { kind: 'INPUT_OBJECT'; name: 'PostRelateToManyForUpdateInput'; isOneOf: false; inputFields: [{ name: 'disconnect'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'set'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'create'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostCreateInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'connect'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; ofType: null; }; }; }; defaultValue: null }]; };
    'AuthorUpdateArgs': { kind: 'INPUT_OBJECT'; name: 'AuthorUpdateArgs'; isOneOf: false; inputFields: [{ name: 'where'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AuthorWhereUniqueInput'; ofType: null; }; }; defaultValue: null }, { name: 'data'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AuthorUpdateInput'; ofType: null; }; }; defaultValue: null }]; };
    'AuthorCreateInput': { kind: 'INPUT_OBJECT'; name: 'AuthorCreateInput'; isOneOf: false; inputFields: [{ name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'posts'; type: { kind: 'INPUT_OBJECT'; name: 'PostRelateToManyForCreateInput'; ofType: null; }; defaultValue: null }]; };
    'PostRelateToManyForCreateInput': { kind: 'INPUT_OBJECT'; name: 'PostRelateToManyForCreateInput'; isOneOf: false; inputFields: [{ name: 'create'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostCreateInput'; ofType: null; }; }; }; defaultValue: null }, { name: 'connect'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PostWhereUniqueInput'; ofType: null; }; }; }; defaultValue: null }]; };
    'JSON': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'createPost': { name: 'createPost'; type: { kind: 'OBJECT'; name: 'Post'; ofType: null; } }; 'createPosts': { name: 'createPosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'updatePost': { name: 'updatePost'; type: { kind: 'OBJECT'; name: 'Post'; ofType: null; } }; 'updatePosts': { name: 'updatePosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'deletePost': { name: 'deletePost'; type: { kind: 'OBJECT'; name: 'Post'; ofType: null; } }; 'deletePosts': { name: 'deletePosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'createAuthor': { name: 'createAuthor'; type: { kind: 'OBJECT'; name: 'Author'; ofType: null; } }; 'createAuthors': { name: 'createAuthors'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Author'; ofType: null; }; } }; 'updateAuthor': { name: 'updateAuthor'; type: { kind: 'OBJECT'; name: 'Author'; ofType: null; } }; 'updateAuthors': { name: 'updateAuthors'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Author'; ofType: null; }; } }; 'deleteAuthor': { name: 'deleteAuthor'; type: { kind: 'OBJECT'; name: 'Author'; ofType: null; } }; 'deleteAuthors': { name: 'deleteAuthors'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Author'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'post': { name: 'post'; type: { kind: 'OBJECT'; name: 'Post'; ofType: null; } }; 'posts': { name: 'posts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; }; } }; 'postsCount': { name: 'postsCount'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'author': { name: 'author'; type: { kind: 'OBJECT'; name: 'Author'; ofType: null; } }; 'authors': { name: 'authors'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Author'; ofType: null; }; }; } }; 'authorsCount': { name: 'authorsCount'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'keystone': { name: 'keystone'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneMeta'; ofType: null; }; } }; 'nexusPosts': { name: 'nexusPosts'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; }; } }; 'things': { name: 'things'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'NexusThing'; ofType: null; }; }; } }; }; };
    'KeystoneMeta': { kind: 'OBJECT'; name: 'KeystoneMeta'; fields: { 'adminMeta': { name: 'adminMeta'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminMeta'; ofType: null; }; } }; }; };
    'KeystoneAdminMeta': { kind: 'OBJECT'; name: 'KeystoneAdminMeta'; fields: { 'lists': { name: 'lists'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIListMeta'; ofType: null; }; }; }; } }; 'list': { name: 'list'; type: { kind: 'OBJECT'; name: 'KeystoneAdminUIListMeta'; ofType: null; } }; }; };
    'KeystoneAdminUIListMeta': { kind: 'OBJECT'; name: 'KeystoneAdminUIListMeta'; fields: { 'key': { name: 'key'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'itemQueryName': { name: 'itemQueryName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'listQueryName': { name: 'listQueryName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'hideCreate': { name: 'hideCreate'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'hideDelete': { name: 'hideDelete'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'path': { name: 'path'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'label': { name: 'label'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'singular': { name: 'singular'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'plural': { name: 'plural'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'initialColumns': { name: 'initialColumns'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; } }; 'pageSize': { name: 'pageSize'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'labelField': { name: 'labelField'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'fields': { name: 'fields'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMeta'; ofType: null; }; }; }; } }; 'groups': { name: 'groups'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldGroupMeta'; ofType: null; }; }; }; } }; 'graphql': { name: 'graphql'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIGraphQL'; ofType: null; }; } }; 'initialSort': { name: 'initialSort'; type: { kind: 'OBJECT'; name: 'KeystoneAdminUISort'; ofType: null; } }; 'isHidden': { name: 'isHidden'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'isSingleton': { name: 'isSingleton'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'KeystoneAdminUIFieldMeta': { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMeta'; fields: { 'path': { name: 'path'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'label': { name: 'label'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'isOrderable': { name: 'isOrderable'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'isFilterable': { name: 'isFilterable'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'isNonNull': { name: 'isNonNull'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'KeystoneAdminUIFieldMetaIsNonNull'; ofType: null; }; }; } }; 'fieldMeta': { name: 'fieldMeta'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; } }; 'viewsIndex': { name: 'viewsIndex'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'customViewsIndex': { name: 'customViewsIndex'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'createView': { name: 'createView'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaCreateView'; ofType: null; }; } }; 'listView': { name: 'listView'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaListView'; ofType: null; }; } }; 'itemView': { name: 'itemView'; type: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaItemView'; ofType: null; } }; 'search': { name: 'search'; type: { kind: 'ENUM'; name: 'QueryMode'; ofType: null; } }; }; };
    'KeystoneAdminUIFieldMetaIsNonNull': { name: 'KeystoneAdminUIFieldMetaIsNonNull'; enumValues: 'read' | 'create' | 'update'; };
    'KeystoneAdminUIFieldMetaCreateView': { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaCreateView'; fields: { 'fieldMode': { name: 'fieldMode'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'KeystoneAdminUIFieldMetaCreateViewFieldMode'; ofType: null; }; } }; }; };
    'KeystoneAdminUIFieldMetaCreateViewFieldMode': { name: 'KeystoneAdminUIFieldMetaCreateViewFieldMode'; enumValues: 'edit' | 'hidden'; };
    'KeystoneAdminUIFieldMetaListView': { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaListView'; fields: { 'fieldMode': { name: 'fieldMode'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'KeystoneAdminUIFieldMetaListViewFieldMode'; ofType: null; }; } }; }; };
    'KeystoneAdminUIFieldMetaListViewFieldMode': { name: 'KeystoneAdminUIFieldMetaListViewFieldMode'; enumValues: 'read' | 'hidden'; };
    'KeystoneAdminUIFieldMetaItemView': { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMetaItemView'; fields: { 'fieldMode': { name: 'fieldMode'; type: { kind: 'ENUM'; name: 'KeystoneAdminUIFieldMetaItemViewFieldMode'; ofType: null; } }; 'fieldPosition': { name: 'fieldPosition'; type: { kind: 'ENUM'; name: 'KeystoneAdminUIFieldMetaItemViewFieldPosition'; ofType: null; } }; }; };
    'KeystoneAdminUIFieldMetaItemViewFieldMode': { name: 'KeystoneAdminUIFieldMetaItemViewFieldMode'; enumValues: 'edit' | 'read' | 'hidden'; };
    'KeystoneAdminUIFieldMetaItemViewFieldPosition': { name: 'KeystoneAdminUIFieldMetaItemViewFieldPosition'; enumValues: 'form' | 'sidebar'; };
    'QueryMode': { name: 'QueryMode'; enumValues: 'default' | 'insensitive'; };
    'KeystoneAdminUIFieldGroupMeta': { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldGroupMeta'; fields: { 'label': { name: 'label'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'fields': { name: 'fields'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIFieldMeta'; ofType: null; }; }; }; } }; }; };
    'KeystoneAdminUIGraphQL': { kind: 'OBJECT'; name: 'KeystoneAdminUIGraphQL'; fields: { 'names': { name: 'names'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'KeystoneAdminUIGraphQLNames'; ofType: null; }; } }; }; };
    'KeystoneAdminUIGraphQLNames': { kind: 'OBJECT'; name: 'KeystoneAdminUIGraphQLNames'; fields: { 'outputTypeName': { name: 'outputTypeName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'whereInputName': { name: 'whereInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'whereUniqueInputName': { name: 'whereUniqueInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'createInputName': { name: 'createInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'createMutationName': { name: 'createMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'createManyMutationName': { name: 'createManyMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'relateToOneForCreateInputName': { name: 'relateToOneForCreateInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'relateToManyForCreateInputName': { name: 'relateToManyForCreateInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'itemQueryName': { name: 'itemQueryName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'listOrderName': { name: 'listOrderName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'listQueryCountName': { name: 'listQueryCountName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'listQueryName': { name: 'listQueryName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'updateInputName': { name: 'updateInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'updateMutationName': { name: 'updateMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'updateManyInputName': { name: 'updateManyInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'updateManyMutationName': { name: 'updateManyMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'relateToOneForUpdateInputName': { name: 'relateToOneForUpdateInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'relateToManyForUpdateInputName': { name: 'relateToManyForUpdateInputName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'deleteMutationName': { name: 'deleteMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'deleteManyMutationName': { name: 'deleteManyMutationName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'KeystoneAdminUISort': { kind: 'OBJECT'; name: 'KeystoneAdminUISort'; fields: { 'field': { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'direction': { name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'KeystoneAdminUISortDirection'; ofType: null; }; } }; }; };
    'KeystoneAdminUISortDirection': { name: 'KeystoneAdminUISortDirection'; enumValues: 'ASC' | 'DESC'; };
    'NexusThing': { kind: 'OBJECT'; name: 'NexusThing'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    '__Schema': { kind: 'OBJECT'; name: '__Schema'; fields: { 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'types': { name: 'types'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; }; }; } }; 'queryType': { name: 'queryType'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; } }; 'mutationType': { name: 'mutationType'; type: { kind: 'OBJECT'; name: '__Type'; ofType: null; } }; 'subscriptionType': { name: 'subscriptionType'; type: { kind: 'OBJECT'; name: '__Type'; ofType: null; } }; 'directives': { name: 'directives'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Directive'; ofType: null; }; }; }; } }; }; };
    '__Type': { kind: 'OBJECT'; name: '__Type'; fields: { 'kind': { name: 'kind'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: '__TypeKind'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'specifiedByURL': { name: 'specifiedByURL'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'fields': { name: 'fields'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Field'; ofType: null; }; }; } }; 'interfaces': { name: 'interfaces'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; }; } }; 'possibleTypes': { name: 'possibleTypes'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; }; } }; 'enumValues': { name: 'enumValues'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__EnumValue'; ofType: null; }; }; } }; 'inputFields': { name: 'inputFields'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__InputValue'; ofType: null; }; }; } }; 'ofType': { name: 'ofType'; type: { kind: 'OBJECT'; name: '__Type'; ofType: null; } }; 'isOneOf': { name: 'isOneOf'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; }; };
    '__TypeKind': { name: '__TypeKind'; enumValues: 'SCALAR' | 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'LIST' | 'NON_NULL'; };
    '__Field': { kind: 'OBJECT'; name: '__Field'; fields: { 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'args': { name: 'args'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__InputValue'; ofType: null; }; }; }; } }; 'type': { name: 'type'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; } }; 'isDeprecated': { name: 'isDeprecated'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'deprecationReason': { name: 'deprecationReason'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    '__InputValue': { kind: 'OBJECT'; name: '__InputValue'; fields: { 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'type': { name: 'type'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__Type'; ofType: null; }; } }; 'defaultValue': { name: 'defaultValue'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'isDeprecated': { name: 'isDeprecated'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'deprecationReason': { name: 'deprecationReason'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    '__EnumValue': { kind: 'OBJECT'; name: '__EnumValue'; fields: { 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'isDeprecated': { name: 'isDeprecated'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'deprecationReason': { name: 'deprecationReason'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    '__Directive': { kind: 'OBJECT'; name: '__Directive'; fields: { 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'isRepeatable': { name: 'isRepeatable'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'locations': { name: 'locations'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: '__DirectiveLocation'; ofType: null; }; }; }; } }; 'args': { name: 'args'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: '__InputValue'; ofType: null; }; }; }; } }; }; };
    '__DirectiveLocation': { name: '__DirectiveLocation'; enumValues: 'QUERY' | 'MUTATION' | 'SUBSCRIPTION' | 'FIELD' | 'FRAGMENT_DEFINITION' | 'FRAGMENT_SPREAD' | 'INLINE_FRAGMENT' | 'VARIABLE_DEFINITION' | 'SCHEMA' | 'SCALAR' | 'OBJECT' | 'FIELD_DEFINITION' | 'ARGUMENT_DEFINITION' | 'INTERFACE' | 'UNION' | 'ENUM' | 'ENUM_VALUE' | 'INPUT_OBJECT' | 'INPUT_FIELD_DEFINITION'; };
};
}

export type Context<Session = any> = import('@keystone-6/core/types').KeystoneContext<TypeInfo<Session>>
export type Config<Session = any> = import('@keystone-6/core/types').KeystoneConfig<TypeInfo<Session>>

export type TypeInfo<Session = any> = {
  lists: {
    readonly Post: Lists.Post.TypeInfo<Session>
    readonly Author: Lists.Author.TypeInfo<Session>
  }
  prisma: import('./node_modules/myprisma').PrismaClient
  session: Session
  introspection: IntrospectionResult
  scalars: Scalars
}

type __TypeInfo<Session = any> = TypeInfo<Session>

export type Lists<Session = any> = {
  [Key in keyof TypeInfo['lists']]?: import('@keystone-6/core').ListConfig<TypeInfo<Session>['lists'][Key]>
} & Record<string, import('@keystone-6/core').ListConfig<any>>

export {}
