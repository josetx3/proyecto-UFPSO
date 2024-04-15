import { Component } from '@angular/core';
import {Movie} from "@app/modules/user/interfaces/home.interface";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  Movies: Movie[] = [
    {
      movie_id: 1,
      movie_name: 'Shazam Fury',
      movie_category: 'Acción / Fantasía',
      movie_rating: 1,
      movie_img: 'assets/img/movies/shazam.png',
      movie_date: '2023',
      movie_duration: '2h 10m',
      movie_text: 'Shazam! Fury of the Gods is a 2023 American superhero film based on the DC character Shazam. Produced by New Line Cinema, DC Studios, and the Safran Company, and distributed by Warner Bros. Pictures, it is the sequel to Shazam! (2019) and the 12th installment in the DC Extended Universe (DCEU).',
      movie_times: '14:00 PM - 16:00 PM',
      movie_status: 'Activa',
      movie_home: true
    },
    {
      movie_id: 2,
      movie_name: 'Jhon wick 3',
      movie_category: 'Acción / Suspenso',
      movie_rating: 2,
      movie_img: 'assets/img/movies/jhon.webp',
      movie_date: '2019',
      movie_duration: '2h 11m',
      movie_text: 'John Wick: Chapter 3 - Parabellum (titulada: John Wick: Capítulo 3 - Parabellum en España y John Wick 3: Parabellum en Hispanoamérica) es una película de suspense de acción, suspense y neo-noir estadounidense de 2019 protagonizada por Keanu Reeves como el personaje epónimo. Es la tercera entrega de la serie de películas de "John Wick", después de "John Wick" (2014) y "John Wick: Chapter 2" (2017).',
      movie_times: '20:00 PM - 22:00 PM',
      movie_status: 'Inactiva',
      movie_home: true
    },
    {
      movie_id: 3,
      movie_name: 'The Dark Knight',
      movie_category: 'Acción / Drama',
      movie_rating: 3,
      movie_img: 'assets/img/movies/the-dark-knight.jpg',
      movie_date: '2008',
      movie_duration: '2h 32m',
      movie_text: 'The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan\'s The Dark Knight Trilogy and a sequel to 2005\'s Batman Begins.',
      movie_times: '16:30 PM - 19:02 PM',
      movie_status: 'Activa',
      movie_home: true
    },
    {
      movie_id: 4,
      movie_name: 'Inception',
      movie_category: 'Ciencia ficción / Acción',
      movie_rating: 4,
      movie_img: 'assets/img/movies/inception.jpg',
      movie_date: '2010',
      movie_duration: '2h 28m',
      movie_text: 'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious, and is offered a chance to have his criminal history erased as payment for the implantation of another person\'s idea into a target\'s subconscious.',
      movie_times: '18:00 PM - 20:28 PM',
      movie_status: 'Activa',
      movie_home: true
    },
    {
      movie_id: 5,
      movie_name: 'The Matrix',
      movie_category: 'Ciencia ficción / Acción',
      movie_rating: 3,
      movie_img: 'assets/img/movies/the-matrix.jpg',
      movie_date: '1999',
      movie_duration: '2h 16m',
      movie_text: 'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise.',
      movie_times: '12:00 PM - 14:16 PM',
      movie_status: 'Activa',
      movie_home: true
    },
    {
      movie_id: 6,
      movie_name: 'Avengers: Endgame',
      movie_category: 'Acción / Fantasía',
      movie_rating: 2,
      movie_img: 'assets/img/movies/avenger-end-games.webp',
      movie_date: '2019',
      movie_duration: '3h 2m',
      movie_text: 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).',
      movie_times: '15:00 PM - 18:02 PM',
      movie_status: 'Activa',
      movie_home: false
    },
    {
      movie_id: 7,
      movie_name: 'Interstellar',
      movie_category: 'Ciencia ficción / Drama',
      movie_rating: 4,
      movie_img: 'assets/img/movies/interstellar.jpg',
      movie_date: '2014',
      movie_duration: '2h 49m',
      movie_text: 'Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael Caine, and Matt Damon.',
      movie_times: '17:30 PM - 20:19 PM',
      movie_status: 'Activa',
      movie_home: false
    },
    {
      movie_id: 8,
      movie_name: 'The Shawshank Redemption',
      movie_category: 'Drama / Crimen',
      movie_rating: 1,
      movie_img: 'assets/img/movies/the-shawshank-redemption.jpg',
      movie_date: '1994',
      movie_duration: '2h 22m',
      movie_text: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.',
      movie_times: '20:30 PM - 22:52 PM',
      movie_status: 'Activa',
      movie_home: false
    }
  ]

  countStartMovie(rating: number): string[] {
    const starClasses = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starClasses.push('icon-star-full');
      } else {
        starClasses.push('icon-star');
      }
    }
    return starClasses;
  }

}
