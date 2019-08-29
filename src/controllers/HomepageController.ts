import { Request, Response } from 'express'

export class HomepageController {
    /**
     * GET /
     * Home page.
     */
    public async index (_request: Request, response: Response): Promise<any> {
        return response.json({ buh: 'stuff' })
    }
}

