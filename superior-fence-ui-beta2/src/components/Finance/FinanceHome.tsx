import { useEffect, useState } from "react";
import type {
  HomePagePurposeNew,
  ILocationThemeSettings,
} from "../../graphql/generatedType/ResponseType";
import GreyLine from "../GreyLine/GreyLine";
import RedLine from "../RedLine/RedLine";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FinanceHome = ({ data }: { data: HomePagePurposeNew }) => {
  const [financeAmount, setFinanceAmount] = useState<number>(0);
  const [monthsFinanced, setMonthsFinanced] = useState<number>(60);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    if (data?.monthsFinanced) setMonthsFinanced(data?.monthsFinanced);
  }, [data?.monthsFinanced]);

  const interestRate: number = parseFloat(data?.interestRate || "0") / 100;

  useEffect(() => {
    const P = financeAmount;
    const i = 9.8647 / 100 / 12;
    const n = monthsFinanced;

    const monthlyPayment =
      (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    const roundedPayment = Math.round(monthlyPayment * 100) / 100;
    setMonthlyPayment(roundedPayment);
  }, [financeAmount, monthsFinanced, interestRate]);

  return (
    <>
      <GreyLine />
      <div className="py-[80px] imageBg">
        <div className="container">
          <div className="max-w-[810px] m-auto">
            <h2 className="text-[36px] text-center mb-[15px]">
              {data?.financeYourProjectHeading}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.financeYourProjectDescription,
              }}
              className="text-[#707070] font-normal text-center text-[16px] mb-[30px] calculator_cnt"
            />
            <p className="text-[#707070] font-normal text-center text-[16px] mb-[20px]">
              {data?.financeYourProjectCalculateHeading}
            </p>

            <div className="mt-[20px]">
              <div className="max-w-[373px] m-auto">
                <div className="flex items-center">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Finance Amount ($)
                  </p>
                  <Input
                    className="max-w-[153px] text-[#252525]"
                    value={financeAmount}
                    type="number"
                    onChange={(e) =>
                      setFinanceAmount(parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="flex items-center my-[20px]">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Interest Rate % (APR)
                  </p>
                  <Input
                    className="max-w-[153px] !text-[#252525] !opacity-[1] !cursor-auto bg-[#f2f2f2]"
                    type="number"
                    disabled
                    value={data?.interestRate}
                  />
                </div>
                <div className="flex items-center ">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Months Financed
                  </p>
                  <Input
                    className="max-w-[153px] !text-[#252525] !opacity-[1] !cursor-auto bg-[#f2f2f2]"
                    value={monthsFinanced}
                    type="number"
                    onChange={(e) =>
                      setMonthsFinanced(parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="flex items-center justify-end bg-[#9E9E9E] mt-[30px]">
                  <div className="left">
                    <p className="text-white mr-[20px] font-normal text-[13px] uppercase">
                      Monthly Payment
                    </p>
                  </div>
                  <div className="rgt py-[10px] px-[15px] bg-[#00000040]">
                    <p className="text-[19px] font-bold text-white">
                      ${Number.isNaN(monthlyPayment) ? "0" : monthlyPayment}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-[30px]">
                  <a
                    href="/fence-services/fence-financing"
                    className="max-w-[197px] w-full h-[43px] red_btn"
                  >
                    {data?.ownASuperiorFenceButtonTitle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RedLine />
    </>
  );
};

export default FinanceHome;
