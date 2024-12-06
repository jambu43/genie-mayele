import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Reservation() {
  return (
    <section className='min-h-screen bg-black text-white flex items-center justify-center p-4 mt-10'>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          OohMyPub ouvre la voie à votre succès publicitaire : Réservez votre rendez-vous GRATUIT de 30 minutes
          </h2>
          <div className="space-y-4 text-sm md:text-base">
            <p>Et si la publicité pouvait offrir une image plus attrayante ?</p>
            <p>
              Durant cet échange constructif, Jacky PALE, fondateur d&apos;OohMyPub, partagera avec vous des stratégies puissantes et inspirantes à votre situation, pour transformer vos ambitions en résultats concrets.
            </p>
            <p>
              Ce rendez-vous est bien plus qu&apos;une simple consultation. C&apos;est une porte d&apos;entrée vers des opportunités que vous n&apos;avez pas encore exploitées.
            </p>
            <p>
              Découvrez comment y parvenir rapidement et offrir de clients sans parcours du combattant ou budgets inutiles.
              Un autre bénéfice ? Vous obtiendrez enfin des prospects qualifiés, et accéderez à un carnet de commandes intéressant.
              Jacky vous dévoilera aussi les clés de la créativité et comment élaborer des messages percutants et comment les transmettre efficacement sur les meilleurs canaux.
            </p>
            <p>
              Oh surprise ! Obtenez à l&apos;issue de cet entretien un document inédit d&apos;une nouvelle page de leur histoire, vous prêts à investir dans de nouvelles collections originales et créatives.
            </p>
            <p>Inscrivez-vous dès aujourd&apos;hui et osez transformer votre vision en réalité.</p>
          </div>
          <Button variant="outline" size="lg" className="border border-white rounded-full bg-transparent p-8 mt-10">
            Prendre rendez-vous
          </Button>
        </div>
        <div className="flex-1 relative h-[400px] w-full max-w-[400px]">
          <Image
            src="/emma.png"
            alt="Marketing Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

    </section>
  )
}

export default Reservation
