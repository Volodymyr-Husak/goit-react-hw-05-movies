- "/" layout"
  - / HOME
  - / MOVIES
    - / CAST
    - / REVIEWS

'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією
про кінофільм. /movies/:movieId/cast – компонент Cast, інформація про акторський
склад. Рендериться на сторінці MovieDetails. /movies/:movieId/reviews –
компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
