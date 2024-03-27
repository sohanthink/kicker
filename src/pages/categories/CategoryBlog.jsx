import React from 'react'
import Image from '../../utilities/Image'

const CategoryBlog = () => {
    return (
        <div>
            <div>
                <Image source="https://images.pexels.com/photos/15317894/pexels-photo-15317894/free-photo-of-close-up-of-a-colorful-abstract-painting-with-a-heart-shape-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
            </div>
            <h5>health</h5>

            <h3 className="font-bold py-4 font-primary text-black text-4xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white">This is What Physical Therapy Can Actually Solve</h3>

            <p>Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Middle Post…</p>
        </div>
    )
}

export default CategoryBlog