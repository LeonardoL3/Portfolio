import Image from 'next/image'

export function GithubProjects() {
	return (
		<div className="h-screen flex justify-center items-center flex-col">
      teste
			<div className="w-full">
				<div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
					<div className="h-2/3 overflow-hidden rounded-t-3xl relative">
						<Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
					</div>
					<div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
						<span className="text-primary brightness-150">
              um projetinho maneirinho usando next.js e stripe.
						</span>
					</div>
				</div>
				<div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
					<div className="h-2/3 overflow-hidden rounded-t-3xl relative">
						<Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
					</div>
					<div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
						<span className="text-primary brightness-150">
              um projetinho maneirinho usando next.js e stripe.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}






/*
<div className="w-80 h-80 bg-transparent bg border-2 border-solid border-neutral-300 rounded-t-3xl hover:scale-105 transition delay-80">
          <div className="h-2/3 overflow-hidden rounded-t-3xl relative">
            <Image src="https://github.com/Leonardo334.png" layout="fill" className="object-cover" />
          </div>
          <div className="p-4 border-t-2 border-solid border-neutral-300 h-1/3 flex items-center justify-center text-center">
            <span className="text-primary brightness-150">
              um projetinho maneirinho usando next.js e stripe.
            </span>
          </div>
        </div>

*/