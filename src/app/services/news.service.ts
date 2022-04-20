import { Injectable } from "@angular/core";
import { News } from "../models/news.model";

@Injectable ({
    providedIn: 'root'
})

export class NewsService {
    news: News[] = [
        {
            newsId: 1,
            newsTitle: 'Un été étouffant au Mordor',
            newsDate: new Date(),
            newsImageUrl: 'assets/mordor.webp',
            newsDescription: 'Des chaleurs inhabituelles en région Mordor.',
            newsLocation: 'Mordor'
        },
        {
            newsId: 2,
            newsTitle: 'Un anniversaire remarquable',
            newsDate: new Date(),
            newsImageUrl: 'assets/cake.webp',
            newsDescription: 'Bilbo marque les esprits avec son anniversaire'
        },
        {
            newsId: 3,
            newsTitle: 'Tensions politiques au sommet',
            newsDate: new Date(),
            newsImageUrl: 'assets/council.webp',
            newsDescription: 'Des tensions retardent le sommet de Fondcombe.',
            newsLocation: 'Fondcombe'
        },
        {
            newsId: 4,
            newsTitle: 'Legolas nous livre son après-shampoing',
            newsDate: new Date(),
            newsImageUrl: 'assets/legolas.jpg',
            newsDescription: 'Enfin une interview beauté de Legolas.'
        },
        {
            newsId: 5,
            newsTitle: 'Astuces de marche de Grand-pas',
            newsDate: new Date(),
            newsImageUrl: 'assets/aragorn.png',
            newsDescription: 'Bivouacs, treks de plusieurs semaines... ses conseils.'
        },

    ];

    getAllNews(): News[] {
        return this.news;
    }

    getNewsById(newsId: number): News {
        const news = this.news.find(news => news.newsId === newsId);
        if(!news){
            throw new Error('actualité non trouvée');
        } else {
            return news;
        }
    }

}