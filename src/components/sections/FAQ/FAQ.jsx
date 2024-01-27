import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { over, under } from "utils/breakPoints";

const FAQ = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <PageWrapper>
      <HeadingContainer>
        <Header>ხშირად დასმული კითხვები</Header>
        <Button>ყველა კითხვა</Button>
      </HeadingContainer>
      <Accordion>
        <AccodioItem>
          <AccordionTittle onClick={() => setIsActive1(!isActive1)}>
            <Questions>როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?</Questions>
            <div>
              {isActive1 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </div>
          </AccordionTittle>
          {isActive1 && (
            <AccordionContent>
              <Answers>
                კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:
              </Answers>
              <Stages>
                <div>
                  <b>I ეტაპი</b>- პირველ ეტაპზე საჭიროა, შეავსო სასურველი
                  კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც
                  განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის
                  დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.
                </div>

                <div>
                  <b>II ეტაპი</b>- შერჩევის მეორე ეტაპი კურსების მიხედვით
                  განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
                  კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
                  შემთხვევაში გადახვალ შერჩევის
                </div>
                <div>
                  <b>III ეტაპი</b> - მესამე ეტაპი კურსების მიხედვით
                  განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული
                  ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი
                  ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის
                  წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური
                  დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
                </div>
                <div>
                  <b> IV ეტაპი</b> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
                  გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით
                  გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
                  ხელშეკრულება.
                </div>
              </Stages>
              <Answers>
                * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით
                წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და
                გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.{" "}
              </Answers>
            </AccordionContent>
          )}
        </AccodioItem>
        <hr size="1" />
        <AccodioItem>
          <AccordionTittle onClick={() => setIsActive2(!isActive2)}>
            <Questions>შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?</Questions>
            <div>
              {isActive2 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </div>
          </AccordionTittle>
          {isActive2 && (
            <AccordionContent>
              <p>
                TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ
                კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა
                Information Security და Python კურსებისა, სადაც Basic დონის
                გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
              </p>
            </AccordionContent>
          )}
        </AccodioItem>
        <hr size="1" />
        <AccodioItem>
          <AccordionTittle onClick={() => setIsActive3(!isActive3)}>
            <Questions>რა ღირს სწავლა პროგრამის ფარგლებში?</Questions>
            <div>
              {isActive3 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </div>
          </AccordionTittle>
          {isActive3 && (
            <AccordionContent>
              <p>
                პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია
                თიბისი ბანკისა და USAID-ის მიერ.
              </p>
            </AccordionContent>
          )}
        </AccodioItem>
        <hr size="1" />
      </Accordion>
      <ButtonContainer>
        <ResponsiveButton>ყველა კითხვა</ResponsiveButton>
      </ButtonContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #1a1e1f;
  padding: 75px 150px;
  ${under.med`
    padding:50px 15px;
  `}
`;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Header = styled.h2`
  margin: 0px;
  font-size: 25px;
  color: #f4f4f4;
  ${under.med`
    margin-bottom:30px;
  `}
`;
const Button = styled.button`
  border: none;
  background-color: #1a1e1f;
  font-size: 20px;
  color: #00aef3;
  font-weight: bolder;
  padding: 0px;
  cursor: pointer;
  &:hover {
    color: #f4f4f4;
    transition: 0.3s;
  }
  ${under.med`
    display:none;
  `}
`;
const ResponsiveButton = styled.button`
  border: none;
  background-color: #1a1e1f;
  font-size: 20px;
  color: #00aef3;
  font-weight: bolder;
  cursor: pointer;
  padding: 0px;
  &:hover {
    color: #f4f4f4;
    transition: 0.3s;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${over.med`
    display:none;
  `}
`;
const Accordion = styled.div``;
const AccodioItem = styled.div`
  padding-bottom: 10px;
`;
const AccordionTittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #dbdbdb;
`;

const AccordionContent = styled.div`
  color: #f4f4f4;
`;

const Questions = styled.p`
  font-size: 22px;
`;
const Answers = styled.p``;
const Stages = styled.div`
  margin: 40px 0px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default FAQ;
