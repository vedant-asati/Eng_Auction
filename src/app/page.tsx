"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Input from "@/components/Input";
import TopBar from "@/components/TopBar";
import Details from "@/components/Details";
import CircularProgressBar from "@/components/CircularProgressBar";
import "./styles/custom-scrollbar.css";

import Custombutton from "@/components/Custombutton";

import CustomInput from "@/components/CustomInput";
import CustomDropdown from "@/components/CustomDropdown";
import CustomDiv from "@/components/CustomDiv";
import Modal2 from "@/components/Modal2";
import BidList from "@/components/BidList";
import CardOpenBid from "@/components/CardOpenBid";
import CircularProgressBarClosedBid from "@/components/CircularProgressBarClosedBid";
import EndAuctionModal from "@/components/EndAuctionModal";

export default function Home() {
  return (
    <div className="font-[500]">
      <div className="relative md:hidden ">
        <div className="h-screen w-screen ">
          <AppContent />
        </div>
      </div>
      <div className="hidden md:block  ">
        <PhoneFrame AppContent={<AppContent />} />
      </div>
    </div>
  );
}

const AppContent = () => {
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [profileSection, setProfileSection] = useState(false);
  const AuctionName = "English Auction";
  const ProductName = "AirpodsPro";
  const BasePrice = 1000.0;
  const EMDprice = 200.0;
  const Reserveprice = 500.0;
  const currentHighest = 999.98;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const AuctionType: string = "closedbid";
  // const AuctionType: string = "openbid";
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [winnerName, setWinnerName] = useState("John Doe");
  const [winningBid, setWinningBid] = useState(1500.0);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const newAvatarUrls = Array.from(
      { length: 28 },
      (_, i) => `https://api.auctionx.dev/assets/avatar/${i + 1}.png`
    );
    setAvatarUrls(newAvatarUrls);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuctionEnded(true);
    }, 5000); // Auction ends after 5 seconds for demonstration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!profileSection ? (
        <div className="relative w-full h-full overflow-hidden md:rounded-[2rem]">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A038B] to-[#0C0D29] z-0"></div>

          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/images/download.png')] bg-center bg-cover opacity-15 z-10 md:opacity-25"></div>

          {/* Content */}
          <div className="relative z-20 w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            <div className="relative min-h-full text-white flex flex-col justify-start items-center p-3 gap-5">
              {/* <TopBar setProfileSection={setProfileSection} /> */}
              <TopBar
                setIsModalOpen={setIsModalOpen}
                setProfileSection={setProfileSection}
              />
              <div className="w-full mu:mt-4 ms:mt-2 px-2 mu:px-5 ms:px-3 msx:px-2 ">
                <Details ProductName={ProductName} BasePrice={BasePrice} />
              </div>

              {AuctionType == "closedbid" && (
                <>
                  <Card
                    ReservePrice={Reserveprice}
                    EMDprice={EMDprice}
                    AuctionName={AuctionName}
                  />
                  <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2 z-40 msx:top-[24rem] mu:top-[26rem] flex flex-col ms:block mu:hidden">
                    <CircularProgressBar
                      currentHighest={currentHighest}
                      progress={59}
                      radius={10}
                    />
                  </div>
                  <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2 z-40 msx:top-[24rem] mu:top-[26rem] flex flex-col ms:hidden md:hidden">
                    <CircularProgressBar
                      currentHighest={currentHighest}
                      progress={59}
                      radius={11}
                    />
                  </div>
                </>
              )}
              <div className="relative">
                {AuctionType === "openbid" && (
                  <div className="relative w-[130%] flex justify-between gap-6 pr-4 right-5 z-50">
                    <div className="relative h-[13rem] w-[14rem] md:left-2 ms:h-[16rem] ms:w-[17rem] ms:right-1 mu:h-[18rem] mu:w-[18rem] mu:right-3">
                      <CardOpenBid
                        ReservePrice={Reserveprice}
                        EMDprice={EMDprice}
                        AuctionName={AuctionName}
                      />
                      <div className="absolute bottom-0 left-[52%] transform -translate-x-1/2 translate-y-1/2 z-40">
                        <div className="ms:block mu:hidden">
                          <CircularProgressBarClosedBid
                            currentHighest={currentHighest}
                            progress={59}
                            radius={10}
                          />
                        </div>
                        <div className="ms:hidden md:hidden">
                          <CircularProgressBarClosedBid
                            currentHighest={currentHighest}
                            progress={59}
                            radius={11}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative top-4 right-[5.9rem]">
                      <BidList />
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`mu:mt-[3rem] ms:mt-[2.8rem] flex w-full justify-between  ${
                  AuctionType == "closedbid" ? "md:mt-5" : "mt-9"
                } p-0 m-0 gap-2`}
              >
                <div className="relative -left-11 ms:-left-11  mr-0">
                  <Input />
                </div>

                <button className="relative m-0 py-0 h-6 -bottom-2 bg-[#190c3d] flex ml-0 rounded-lg pl-1 gap-1 shadow-custom mu:right-5 ms:right-2 msx:right-1 mu:h-7 mu:top-[0.6rem] mu:gap-[5px] mu:pl-4 msx:pl-5">
                  <div className="text-[#C0B5FF] text-[10px] mu:text-[12px] relative top-1 mu:right-1 mu:top-[6px] font-manrope">
                    HINT
                  </div>
                  <Image
                    src={"/images/Bulb.png"}
                    alt="png"
                    height={20}
                    width={20}
                    className="relative bottom-0 mu:bottom-2 mu:w-8"
                  />
                </button>
              </div>

              <section className="-mt-1 flex flex-col gap-2 mb-2 w-full pl-2 pr-0 mu:px-5">
                <h2 className="text-[10px] text-white mu:text-[13px] ms:text-[12px] font-sora font-[600]">
                  Bidders
                </h2>
                <div className="flex gap-1 flex-wrap mb-auto justify-start text-sm">
                  {avatarUrls.map((url, index) => (
                    <Image
                      key={index}
                      className="inline-block rounded-full w-[20px] h-[20px] mu:w-[25px] mu:h-[25px]"
                      src={url}
                      alt={`Avatar ${index + 1}`}
                      width={30}
                      height={30}
                    />
                  ))}
                </div>
              </section>
              <NavBar />
              <div className="h-12 hidden not-md:max-h-816:block md:hidden"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden md:rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A038B] to-[#0C0D29] z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/download.png')] bg-center bg-cover opacity-25 z-10"></div>
          <div className="relative z-20 w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            <div className="relative min-h-full text-white flex flex-col justify-start items-center p-3 gap-2">
              <TopBar
                setIsModalOpen={setIsModalOpen}
                setProfileSection={setProfileSection}
              />
              <div className="w-full text-center mt-5 text-xl md:text-xl font-[500] mu:text-3xl">
                Profile
              </div>
              <section className=" md:mb-5 pb-5 w-[90%] mu:w-[85%] border-[0.05px] flex flex-col overflow-x-hidden items-center gap-3 rounded-xl bg-white bg-opacity-15 mu:mt-">
                <div className="w-[80%]  flex  items-center mt-4 gap-4">
                  <Image
                    src={"/images/avatar.png"}
                    alt="Avatar"
                    height={100}
                    width={100}
                    className="h-20 w-20 mu:h-28 mu:w-28 ms:h-20 ms:w-20"
                  />
                  <div className="flex flex-col justify-center ">
                    <div className="text-lg mu:text-2xl flex justify-center items-center gap-2">
                      <div>Bhavya</div>
                      <button>
                        <Image
                          src={"/images/edit.png"}
                          alt="log"
                          height={50}
                          width={50}
                          className="w-[0.85rem] h-[0.85rem] mu:h-4 mu:w-4"
                        />
                      </button>
                    </div>
                    <button className="text-[0.7rem] text-[#B57FEC] flex mu:text-base items-center gap-[0.1rem]">
                      <Image
                        src={"/images/logout.png"}
                        alt="log"
                        height={10}
                        width={10}
                        className="w-3 h-3 mu:w-4 mu:h-4 ms:w-3 ms:h-3"
                      />
                      <div className="underline">Log out</div>
                    </button>
                  </div>
                </div>
                <div className="w-[90%] mx-auto flex flex-col gap-2 mu:gap-3 mu:text-md ms:text-sm">
                  <div className="flex flex-row items-center justify-around ">
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC] h-full">
                        Wallet Address
                      </div>
                      <div>0xcf43...f3a50</div>
                    </div>
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC]">Plays</div>
                      <div>5,999</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-around ">
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC]">Referral Code</div>
                      <div>AUCX02</div>
                    </div>
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC]">Player ID</div>
                      <div>567535724</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-around ">
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC]">State</div>
                      <div>Gujarat</div>
                    </div>
                    <div className="flex flex-col border w-[50%] h-full md:text-xs mu:text-[0.85rem]  items-center py-1 md:gap-1">
                      <div className="text-[#B57FEC]">Country</div>
                      <div>India</div>
                    </div>
                  </div>
                  <div className="mx-4 h-8 mt-1 mu:mt-2 mu:h-10">
                    <Custombutton
                      onClick={() => {
                        console.log(setIsModalOpen(true));
                      }}
                    >
                      <div
                        className="relative w-full flex items-center justify-center h-full text-[0.7rem]  text-center font-[500] mu:text-[0.85rem] ms:text-[0.8rem]"
                        style={{ wordSpacing: "3px" }}
                      >
                        BUY MORE PLAYS
                      </div>
                    </Custombutton>
                  </div>
                </div>
              </section>
              <NavBar />
            </div>
          </div>
        </div>
      )}
      <Modal2 isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-full h-full flex  items-center justify-center ">
          <div className="flex flex-col w-[80%] mu:w-[75%]  mu:text-xl text-white text-xs justify-center items-center gap-2">
            <h2>BUY PLAYs</h2>
            <section className="text-xs text-center mu:text-[1rem] mu:leading-5">
              Buy Plays using $Aux Tokens and get 10% Free PLAYS
            </section>
            <div className="flex flex-col justify-center gap-1 w-[80%] mu:mt-3 mu:gap-2 mu:w-[85%]">
              <CustomInput placeholder="Enter Number of PLAYs"></CustomInput>
              <CustomDropdown
                placeholder="Select"
                options={["Option1", "Option2"]}
              ></CustomDropdown>
              <div className="flex ">
                <CustomDiv>Amount to be Paid</CustomDiv>
                <div className="absolute flex flex-col mu:right-5 ms:right-3 gap-0 text-[0.5rem] w-auto md:left-[195px]">
                  <div className="mu:text-[0.6rem]">USDT</div>
                  <div className="md:-mt-1 text-[0.4rem] mu:-mt-4 mu:text-[0.5rem]">
                    (1 PLAY = $0.1)
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-6 mt-1 ms:h-10 ms:w-[110%] mu:w-[110%] mu:h-12">
              <Custombutton
                onClick={() => {
                  console.log("Buys PLAYs");
                }}
              >
                <div className="-mt-1 text-[0.6rem] ms:text-[0.9rem] mu:text-[1rem]">
                  SUBMIT
                </div>
              </Custombutton>
            </div>
          </div>
        </div>
      </Modal2>
      <EndAuctionModal
        isOpen={isAuctionEnded}
        onClose={() => setIsAuctionEnded(false)}
        winnerName={winnerName}
        winningBid={winningBid}
      />
    </>
  );
};
