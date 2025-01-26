export default function Testimonials() {
    const testimonials = [
      {
        logo: "https://tailwindui.com/plus/img/logos/tuple-logo-white.svg",
        text: `“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”`,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Judith Black",
        role: "CEO of Tuple",
      },
      {
        logo: "https://tailwindui.com/plus/img/logos/reform-logo-white.svg",
        text: `“Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                dolor nisi ullamco.”`,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Joseph Rodriguez",
        role: "CEO of Reform",
      },
    
    ];
  
    return (
      <section className="bg-transparent backdrop-blur py-24 sm:py-32 mt-24 mb-96">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col border-t  dark:border-white/20 border-black/20 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
              >
                <img alt="" src={testimonial.logo} className="h-12 self-start" />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-black dark:text-white">
                    <p>{testimonial.text}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      alt=""
                      src={testimonial.image}
                      className="h-14 w-14 rounded-full bg-gray-800"
                    />
                    <div className="text-base">
                      <div className="font-semibold text-black dark:text-white">{testimonial.name}</div>
                      <div className="mt-1 text-gray-800 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }