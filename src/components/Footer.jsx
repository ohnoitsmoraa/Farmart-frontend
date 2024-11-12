import React from 'react'

function footer() {
  return (
    <div id="#footer">
        <footer className="bg-green-600 text-white rounded-t-md py-9">
				<div
					className=" mx-auto  grid 
            gap-8 w-11/12 items-center "
				>
					<div className="items-center text-center mt-2">
						<h1 className=" text-2xl text-white font-bold">
							Get the freshest FarmArt updates
						</h1>
					</div>
					<div className=" items-center justify-center flex flex-col gap-2 ">
						<h3 className='h3'>Enter email here </h3>
					</div>
                    <div>
                        <button type='submit' id='subscribe_button'>Subscribe</button>
                    </div>
				</div>
			</footer>
    </div>
  )
}

export default footer