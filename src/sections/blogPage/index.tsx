import PageHead from '@/components/pageHead'
import Image from 'next/image'


const BlogPage = () => {
  return (
    <>
        <PageHead
        title="Blog"
        pageName="Blog"
        hasBreadCrumb
      />
<section className="padding-y pb-40">
        <div className="container flex flex-col">
<div className="grid-container">
        <div className="blog-card">
            <Image
                    src={'/images/blog/investment-fraud-lawyer.jpg'}
                    alt={'investment-fraud-lawyer'}
                   width={500}
                   height={500}
                       
                  />
             <h2 className="text-2xl mb-2 mt-2">Protecting Your Investments: How an Investment Fraud Lawyer Can Help Recover Your Losses</h2>
            <p className="blog-description">Investing can be a great way to grow your wealth, but it also comes with risks, including the potential for fraud. When investment fraud occurs, it can be devastating, leaving victims uncertain about how to recover investment losses. </p>
            <div className="flex gap-2 sm:gap-4 flex-wrap mt-2">
                <a className="btn-after !text-black" href="/blog/how-investment-fraud-lawyer-help-recover-your-losses">Read More</a></div>
        </div>
        
    </div>
    </div>
    </section>
    </>
  )
}

export default BlogPage