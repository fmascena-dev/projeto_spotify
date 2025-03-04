import logoSpotify from '../assets/logo/spotify-logo.png';

export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </a>

      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
}
