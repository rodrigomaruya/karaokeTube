import './karaoleComponents.css'

interface YouTubeEmbedProps {
  titulo: string
  videoId: string
  width?: string;
  height?: string;
  
}


const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  titulo,
  videoId,
  width = '100%',
  height = '250px',

}) => {
  return (
    <div className="youtube-embed">
      <h2>{titulo}</h2>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        referrerPolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

