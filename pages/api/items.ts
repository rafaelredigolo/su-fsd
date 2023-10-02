import {NextApiRequest, NextApiResponse} from "next";

type Response =
    {
        createdAt: string;
        fileName: string;
    }

export default function handler(req: NextApiRequest, res: NextApiResponse<Response[]>) {
    const items: Response[] = [
        { createdAt: '2023-06-25 11:00', fileName: '1abc.txt' },
        { createdAt: '2023-06-25 12:00', fileName: 'abc.txt' },
        { createdAt: '2023-06-25 13:00', fileName: '01abc.txt' },
        { createdAt: '2023-06-25 14:00', fileName: '0010abc.txt' },
        { createdAt: '2023-06-25 15:00', fileName: '011abc.txt' },
        { createdAt: '2023-06-25 16:00', fileName: '20-abc.txt' },
        { createdAt: '2023-06-25 17:00', fileName: '021-abc.txt' },
        { createdAt: '2023-06-25 18:00', fileName: '002-abc.txt' },
        { createdAt: '2023-06-25 19:00', fileName: 'cba.txt' },
        { createdAt: '2023-06-25 20:00', fileName: 'abc010.txt' },
        { createdAt: '2023-06-25 21:00', fileName: 'abc1.txt' }
    ]
    res.status(200).json(items)
}
