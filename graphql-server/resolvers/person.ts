import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Person, PersonInput } from "../schemas/person";

@Resolver(Person)
export class PersonResolver {
    private person: Person

    @Query(returns => Person)
    async getPerson(
        @Arg("id") id: number
    ): Promise<Person> {
        return await this.person
    }

    @Mutation(returns => Person)
    async addPerson(
        @Arg('person') { age, nationality, photoUrl }: PersonInput
    ): Promise<Person> {
        const newPerson = {
            id: Math.random(), //terrible
            age,
            nationality,
            photoUrl
        }

        this.person = newPerson
        return newPerson
    }
}
