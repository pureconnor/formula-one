import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { Driver } from './driver'
import { Person } from './person'

@ObjectType()
export class Constructor {
    @Field(type => ID)
    id: number

    @Field()
    name: string

    @Field(type => [String])
    sponsors: Array<string>

    @Field()
    points: number

    @Field(type => [Driver])
    drivers: Array<Driver>

    @Field()
    principal: Person
}

@InputType()
export class ConstructorInput implements Partial<Constructor> {
    @Field()
    name: string
    
    @Field()
    sponsors: Array<string>

    @Field()
    points: number

    @Field()
    drivers: Array<Driver>

    @Field()
    principal: Person
}