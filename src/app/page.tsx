import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle,Smile  } from "lucide-react";

const perks = [
  {
    name: 'Anında Teslimat',
    Icon: ArrowDownToLine,
    description: 'İşlemleriniz en kısa sürede tamamlanır. Gecikme yaşamazsınız. Bütün işlemlerimiz 24 saat içerisinde tamamlanır.',
  },
  {
    name: 'Yüksek Kalite',
    Icon: CheckCircle,
    description: 'Yüksek kalitede hizmet sunuyoruz. Herhangi bir sorunda anında çözüm sunuyoruz. Kalite bizim işimizdir.',
  },
  {
    name: 'Müşteri Memnuniyeti',
    Icon: Smile ,
    description: 'Müşterilermize 7-24 destek sağlıyoruz. Memnuniyet garantisi veriyoruz. Müşteri Memnuniyeti ilkemizdir.',
  }
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper >
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Yüksek kalite için doğru yerdesiniz <span className="text-blue-600">Eraslan Medya</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Hoşgeldiniz. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit. Maiores, quaerat. Reiciendis, illo nam?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="#products" className={buttonVariants()} > Trendlere Göz At</Link>
            <Button variant="ghost">Kalite size sözümüzdür &rarr;</Button>
          </div>

        </div>
        {/* TODO: products listesi */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="md:flex  md:items-start md:text-left text-center lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900 "> {perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
} 
