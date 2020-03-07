describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should have a title", () => {
    cy.get("header H1").should("contain", "Attica Labs");
  });

  it("should be able to type on search input", () => {
    cy.get("header .input input")
      .focus()
      .type("sarasa");
  });

  it("should have alerts", () => {
    cy.get("app-alert-message")
      .eq(0)
      .should("contain", "Oops!");
    cy.get("app-alert-message")
      .eq(1)
      .should("contain", "Peñarol");
    cy.get("app-alert-message")
      .eq(2)
      .should("contain", "Guarda!");
  });

  it("should be able to close alerts", () => {
    const errorAlert = cy.get("app-alert-message [role=alert]").eq(0);
    errorAlert.should("exist");
    errorAlert.find("span.cursor-pointer").click();
    errorAlert.should("not.exist");
  });

  it("should show 3 cards", () => {
    cy.get("app-card").should("have.length", 3);
  });

  it("should have pagination", () => {
    cy.get("app-pagination").should("exist");
  });

  it("should have a date picker", () => {
    cy.get("mat-datepicker").should("exist");
  });
});
