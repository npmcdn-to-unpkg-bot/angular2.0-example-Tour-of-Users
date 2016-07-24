"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var usuarios = [
            { id: 5, nombre: "juan", nick: "kevinlll4", email: "exxx@hotmail.com" },
            { id: 6, nombre: "juadn", nick: "kevinlll4", email: "exxx@hotmail.com" },
            { id: 7, nombre: "juadn", nick: "kevinlll4", email: "eexxx@hotmail.com" },
            { id: 8, nombre: "juan", nick: "kevinlll4", email: "exxx@hotmail.com" }
        ];
        return { usuarios: usuarios };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-users.js.map