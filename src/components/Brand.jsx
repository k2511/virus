import React,{useState} from 'react'

const Brands = () => {
    
      const [val, setVal] = useState(0);
      const list = [
     
        {
          name:"kasperky",
          arr: [{
            img:'https://dantivirus.com/admin/model/pics/kas_standard.png',
            name:"kasperky antivirus 1 pc 1 year",
            price: '249.00'
          },{
            img:'https://dantivirus.com/admin/model/pics/kas_plus.png',
    
             name:"kasperky antivirus 1 pc 1 year",
            price: '349.00'
          },{
            img:'https://dantivirus.com/admin/model/pics/kas_premium.png',
             name:"kasperky total security 1 user 1 years",
            price: '409.00'
          },{
            img:'https://dantivirus.com/admin/model/pics/kas_premium.png',
             name:"kasperky total security 1 user 3 years",
            price: '1399.00'
          },,{
            img:'https://dantivirus.com/admin/model/pics/kas_premium.png',
              name:"kasperky total security 3 user 3 years",
            price: '1899.00'
          },
        ]
        },
        {
          name:"Net Protector",
          arr:[ {
            img:'https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png',
              name:"net protector total security  1 user 1 year",
            price: '428.00'
          },
          ,{
            img:'https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png',
              name:"renew net protector total security 1 pc-1 year",
            price: '438.00'
          },
          ,{
            img:'https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_30_17.png',
              name:"net protector total security 1 user  year",
            price: '998.00'
          },{
            img:'https://dantivirus.com/admin/model/pics/net-protector-antivirus-pro.png',
              name:"net protector antivirus 1 user 1 year",
            price: '350.00'
          },
          {
            img:'https://dantivirus.com/admin/model/pics/net-protector-total-security.png',
              name:"upgrade net protector total security  1 user 3 year",
            price: '998.00'
          },
    
        ]
        },
        {
          name:"K7",
          arr:[{
            img:'https://dantivirus.com/admin/model/pics/k7-antivirus-premuim.png',
             name:'k7 antivirus premium  1 pc 1 year',
                price: '205.00'
          },
          ,{
            img:'https://dantivirus.com/admin/model/pics/k7-total-security.png',
             name:'k7 total security 1 pc  1 year',
                price: '295.00'
          },
          ,{
            img:'https://dantivirus.com/admin/model/pics/k7-total-security.png',
             name:'renew k7 total security 1 pc 1 year',
                price: '379.00'
          },{
            img:'https://dantivirus.com/admin/model/pics/k7-antivirus-premuim08_17_11_35_40.png',
             name:'upgrade k7 antivirus premium 1 user 1 year',
                price: '350.00'
          },
          {
            img:'https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg',
             name:'k7 total security 10 pc 1 year',
                price: '1900.00'
          },
          {
            img:'https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg',
             name:'k7 total security 10 pc 1 year',
                price: '29.00'
          },
        ]
    
        },
        {
          name:"Mcafee",
          arr: [
          {  img: 'https://dantivirus.com/admin/model/pics/mcafee-antivirus08_14_16_59_00.png',
               name:'mcafee antivirus 1 user 1 year',
                price: '238.00',
          },
          {img: 'https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_39_37.png',
            name:'renew mcafee antivirus 1 user 1 year',
                price: '249.00'
    
          },
          {img:'https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_10.png' ,
                name:'mcafee total protection 1 user 1 year',
                price: '298.00'
    
          },{
            img: 'https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_40_25.png',
             name:'mcafee antivirus 1 user 3 year',
                price: '669.00'
          }
    , {
      img:'https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_52.png',
       name:'mcafee total protection 1 user 3 year',
                price: '1200.00'
    }
          ]
        },
        {
          name:"Guardian",
          arr: [
            {  img: 'https://dantivirus.com/admin/model/pics/guardian-total-security08_15_08_36_52.png',
                name:'guardian total security 1 user 1 year',
                price: '435.00'
      
            },
            {img: 'https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png',
                 name:'Renew guardian netsecure 1 pc 1 year',
                price: '299.00'
      
            },
            {img:'https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png' ,
                 name:'guardian net secure 1 user 1 year',
                price: '299.00'
      
            },
        ]
        },
        {
          name:"Mac secure",
          arr: [
            {img: ''}
          ]
        },
        {
          name:"Eset",
          arr:[{
            img :'https://dantivirus.com/admin/model/pics/eset-node-antivirus08_15_08_44_11.png',
            name:'eset node 32 antivirus 1 user 1 year',
            price: '280.00'
          }]
        },
        {
          name:"EScan",
          arr: [{
            img: ''
          }]
        },
        {
          name:"Bitdefender",
          arr: [{
            img: ''
          }]
        },
        
      ]

  return (
    <div>
         <div className="min-h-screen bg-gray-50 p-4 md:p-10">
  <div className="max-w-6xl flex items-center justify-center mx-auto">
    {list.map((val, idx) => (
      <div
        key={idx}
        className="w-fit inline mx-auto px-0 cursor-pointer"
        onClick={() => setVal(idx)}
      >
        <span>{val.name}</span>
      </div>
    ))}
  </div>

  <div className="gap-6 items-stretch mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full">
      { list[val].arr.map((item, i) => (
        <div
          key={i}
          className="bg-white border-2 border-black rounded-xl p-4 shadow flex flex-col justify-between items-center text-center h-full"
        >
         
          <img
            src={item.img}
            alt={item.name}
            className="w-32 object-contain my-3"
          />
           <p className="text-sm  uppercase text-black">{item.name}</p>
        
           <p className="font-semibold text-blue-700">{item.price}</p>
          <div className="flex items-center justify-between w-full">
            <button className="bg-yellow-400 p-2 rounded-full text-white">
            
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default Brands