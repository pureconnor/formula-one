import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class Person {
    @Field(type => ID)
    id: number

    @Field()
    age: number

    @Field()
    nationality: string

    @Field()
    photoUrl: string
}

@InputType()
export class PersonInput implements Partial<Person> {
    @Field()
    age: number

    @Field()
    nationality: string

    @Field()
    photoUrl: string
}