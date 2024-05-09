import { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

interface VideoProps extends ComponentPropsWithRef<"video"> {
  width?: string;
  src?: string;
  autoplay?: boolean;
  controls?: boolean;
}

const Video = (
  { width, src, autoplay, controls, ...props }: VideoProps,
  ref: ForwardedRef<HTMLVideoElement>
) => {
  return (
    <video
      ref={ref}
      width={width}
      src={src}
      autoPlay={autoplay}
      controls={controls}
      {...props}
    />
  );
};

export default forwardRef(Video);
