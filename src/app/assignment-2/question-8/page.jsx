import Slideshow from "@/component/assignment-2/Slideshow";

const ImageSlider = () => {
  return (
    <>
      <p className="question">
        Q8. Use the useEffect hook to manage the current slide and transition.
        Add few images atleast 10 in public folder to populate the slideshow.
        Allow users to pause, play the slideshow. Include a time interval option
        to control the automatic slideshow progression.
      </p>
      <div>
        <Slideshow />
      </div>
    </>
  );
};
export default ImageSlider;
