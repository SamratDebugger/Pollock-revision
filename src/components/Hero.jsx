import { FaPlay } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-[calc(100dvh-89px)]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold">
            Everything we do to make
            <span className="text-info"> Business Grow.</span>
          </h1>
          <p className="py-6 text-balance">
            Find the right space, services, and support, so your business and
            its people can work their way, every day.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="btn btn-info">Book Now</button>
            <div>
              <button className="btn btn-circle text-info shadow-xl  border-none">
                <FaPlay />
              </button>
              <span className="ml-2">How It Works</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
