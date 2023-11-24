import "reflect-metadata";
import { Service, Post, BodyAttribute } from "@bunland/lauri"

@Service({ path: import.meta.path, initRouteWithServiceName: false })
export default class IndexService {
    @Post()
    index(@BodyAttribute("name") name: string) {
        console.log(name)
        return `Hello ${name}!`
    }
}