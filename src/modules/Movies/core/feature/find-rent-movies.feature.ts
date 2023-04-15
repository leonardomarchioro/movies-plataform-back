export abstract class FindRentMoviesFeature {
    abstract execute(userId: number): Promise<any>
}