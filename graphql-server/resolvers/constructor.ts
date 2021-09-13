import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Constructor, ConstructorInput } from "../schemas/constructor";

@Resolver()
export class ConstructorResolver {
    private constructors: Constructor[] = []

    @Query(returns => [Constructor])
    async getConstructors(
        @Arg('name') name: string
    ): Promise<Constructor[]> {
        return await this.constructors
    }

    @Mutation(returns => Constructor)
    async addConstructor(
        @Arg('constructor') { 
            name, sponsors, points, drivers, principal 
        }: ConstructorInput
    ) {
        const newConstructor = {
            id: Math.random(),
            name,
            sponsors,
            points,
            drivers,
            principal
        }

        await this.constructors.push(newConstructor)
        return newConstructor
    }
}