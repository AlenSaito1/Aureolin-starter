import { Controller, Get, Context, Ctx, Param } from 'aureolin'

@Controller('/hello')
export default class HelloController {
    @Get('/')
    public index(): string {
        return 'Hello World!'
    }

    @Get('/:name')
    public hello(@Ctx() ctx: Context): string {
        return `Hello ${ctx.params.name}!`
    }

    @Get('/:name/:age')
    public helloWithAge(@Param('name') name: string, @Param('age') age: string): string {
        return `Hello ${name}, You're Probably ${age} years old!`
    }

    @Get('/:name/:age/:place')
    public helloWithAgeAndPlace(
        @Param('name') name: string,
        @Param('age') age: string,
        @Param('place') place: string
    ): string {
        return `Hello ${name}, You're Probably ${age} years old, and you live in ${place}!`
    }
}
