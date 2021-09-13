import { Field, InputType, ObjectType, ID } from 'type-graphql'
import { Person } from './person'
import { Constructor } from './constructor'

@ObjectType()
export class Driver extends Person {
    @Field(type => ID)
    id: number

    @Field()
    currentTeam: Constructor

    @Field()
    previousTeam?: Constructor

    @Field()
    points: number
}

@InputType()
export class DriverInput implements Partial<Driver> {
    @Field()
    currentTeam: Constructor

    @Field()
    points: number
}
