
const Faq = () => {
    return (
        <div className="bg-yellow-50">
            <section className="p-10 lg:w-1/2 lg:mx-auto">
            <div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
            </section>
        </div>
    );
};

export default Faq;