import React from 'react'

function Cart({username = "Sajedullah Aref", post = 'Student'}) {
    return (
        <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/25643365/pexels-photo-25643365/free-photo-of-two-dogs-running-through-the-woods-with-a-stick.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
    <blockquote>
        <p className="text-lg font-mediu">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
        </p>
    </blockquote>
    <figcaption>
        <div>
        {username}
        </div>
        <div>
        {post}
        </div>
    </figcaption>
    </div>
</figure>
        </>
    )
}

export default Cart